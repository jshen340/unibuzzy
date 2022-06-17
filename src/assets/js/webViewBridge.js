/* eslint-disable no-unused-vars */
import router from '../../router'
import { saveUser } from '../../../public/commonAssets/Tal_axiosFunction.js'
import store from '../../store'

const isJsonString = (str) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
};
(function () {
  var promiseChain = Promise.resolve()
  var callbacks = {}
  var init = function () {
    // 유니크한 아이디를 생성한다.
    // native에서 callback 받을때 id의 callback을 호출한다.
    const guid = function () {
      function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    }

    /**
         * javascript => react-native
         * javascript에서 react-native에 메세지를 보낸다.
         */
    window.webViewBridge = {
      send: function (targetFunc, data, success, error) {
        var msgObj = {
          targetFunc: targetFunc,
          data: data || {}
        }

        if (success || error) {
          msgObj.msgId = guid()
        }

        var msg = JSON.stringify(msgObj)

        promiseChain = promiseChain.then(function () {
          return new Promise(function (resolve, reject) {
            console.log('react native에 메세지를 보냄 ' + msgObj.targetFunc)

            if (msgObj.msgId) {
              callbacks[msgObj.msgId] = {
                onsuccess: success,
                onerror: error
              }
            }
            window.ReactNativeWebView.postMessage(msg)
            resolve()
          })
        }).catch(function (e) {
          console.error('메세지 실패 ' + e.message)
        })
      }
    }

    /**
         * react-native => javascript
         * react native에서 화면에 결과를 넘겨준다.
         */

    document.addEventListener('message', e => listener(e))
    window.addEventListener('message', e => listener(e))

    async function listener (e) {
      var message

      try {
        if (isJsonString(e.data) === true) {
          message = JSON.parse(e.data)
        } else {
          message = e.data
        }
        if (message.type === 'userInfo' || message.type === 'successLogin') {
          if (message.loginYn === true) {
            var userProfile = JSON.parse(message.userInfo)
            localStorage.setItem('loginYn', true)
            /* if (userProfile.mobile === undefined || userProfile.mobile === null || userProfile.mobile === 'null' || userProfile.mobile === '') {
              // localStorage.setItem('tempUserInfo', JSON.stringify(userProfile))
              router.push({ name: 'savePhone', params: { user: JSON.stringify(userProfile) } })
            } else */
            if (userProfile.name === undefined || userProfile.name === null || userProfile.name === '' || userProfile.name === '0' || userProfile.name === 0) {
              // localStorage.setItem('tempUserInfo', JSON.stringify(userProfile))
              router.push({ name: 'saveName', params: { user: JSON.stringify(userProfile) } })
            } else {
              await saveUser(userProfile) // 서버에 save요청
              router.replace({ path: '/' })
            }
            /* localStorage.setItem('userMobile', userProfile.mobile)
            localStorage.setItem('fcmKey', userProfile.deviceInfo.fcmKey)
            localStorage.setItem('userName', userProfile.name)
            localStorage.setItem('userImg', userProfile.userImg)
            localStorage.setItem('userEmail', userProfile.email)
            localStorage.setItem('userAtoken', userProfile.aToken) */
          } else {
            router.replace({ path: 'policies' })
          }
        } else if (message.type === 'CheckUserPermission') {
          router.replace({ name: 'permissions' })
        } else if (message.type === 'requestUserPermission') {
          router.replace({ path: '/' })
        } else if (message.type === 'deviceSystemName') {
          localStorage.setItem('systemName', message.systemNameData)
        } else if (message.type === 'goback') {
          var history = store.getters.hStack
          // alert(history)
          var removePage = history[history.length - 1]
          // alert('removePage' + removePage)
          if (history.length < 2 && (history[0] === 0 || history[0] === undefined)) {
            router.replace({ path: '/' })
          } else {
            history = history.filter((element, index) => index < history.length - 1)
            // alert('ㅂㅕㄴㄱㅕ<br>' + history)
            store.commit('setRemovePage', removePage)
            // alert(store.getters.hRPage)
            store.commit('updateStack', history)
          }
          /* if (localStorage.getItem('popHistoryStack')) {
            ;
          } else {
            router.go(-1)
          } */
          /* alert('뒤로가래!!!') */
        }
      } catch (err) {
        console.error('메세지를 파싱할수 없음 ' + err)
        return
      }

      // callback을 트리거한다.
      if (callbacks[message.msgId]) {
        if (message.isSuccessfull) {
          callbacks[message.msgId].onsuccess.call(null, message)
        } else {
          callbacks[message.msgId].onerror.call(null, message)
        }
        delete callbacks[message.msgId]
      }
    }
  }
  init()
}())
