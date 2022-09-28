/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable camelcase */

import store from '../../store'
import { mapGetters, mapActions } from 'vuex'
import { methods } from '../../../public/commonAssets/Tal_axiosFunction'
import { commonMethods } from './Tal_common'
var this_ = this
var g_user = store.getters['D_USER/GE_USER']
document.addEventListener('message', e => functions.recvNoti(e))
window.addEventListener('message', e => functions.recvNoti(e))
var notiDetail
const isJsonString = (str) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

const functions = {
  /* ...mapActions('D_USER', [
    'AC_USER'
  ]),
  ...mapActions('D_CHANNEL', [
    'AC_MAIN_CHAN_LIST'
  ]),
  ...mapActions('D_CONTENTS', [
    'AC_MAIN_ALIM_LIST'
  ]),
  ...mapActions('D_CONTENTS', [
    'AC_MAIN_BOARD_LIST'
  ]), */
  async actionVuex (type, data, targetKey, allYn, replaceYn, creTeamKey, creCabinetKey) {
    var ActName
    if (type === 'TEAM' || type === 'CABI' || type === 'CONT') {
      ActName = 'D_CHANNEL/AC_MAIN_CHAN_LIST'
    } else if (type === 'COMMONCONT') {
      ActName = 'D_CHANNEL/AC_SET_CHAN_CONT_LIST'
    }

    if (allYn) {
      store.dispatch(ActName, data)
    } else {
      if (replaceYn) {
        var dataList, team, childList, cabIndex, contIndex, cabiList, cabiDetail
        var index
        if (type === 'TEAM') {
          dataList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
          index = dataList.findIndex((item) => item.teamKey === targetKey)
          dataList[index] = data
          store.commit('D_CHANNEL/MU_RECENT_CHANGE_TEAM', targetKey)
          /* if (data.detailPageYn) {
            store.dispatch('D_CHANNEL/AC_RECENT_CHANGE_TEAM', targetKey)
          } */
        } else if (type === 'CABI') {
          dataList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
          index = dataList.findIndex((item) => item.teamKey === creTeamKey)
          team = dataList[index]
          childList = team.ELEMENTS.cabinetList
          cabIndex = childList.findIndex((item) => item.cabinetKey === targetKey)
          childList[cabIndex] = data
          team.ELEMENTS.cabinetList = childList
          dataList = team
          store.commit('D_CHANNEL/MU_RECENT_CHANGE_TEAM', creTeamKey)
        } else if (type === 'COMMONCONT') {
          dataList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
          index = dataList.findIndex((item) => item.teamKey === targetKey)
          dataList[index] = data
        } else if (type === 'CONT') {
          if (creCabinetKey) {
            dataList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
            index = dataList.findIndex((item) => item.teamKey === creTeamKey)
            team = dataList[index]
            childList = team.ELEMENTS.boardList
            contIndex = childList.findIndex((item) => item.contentsKey === targetKey)
            childList[contIndex] = data
            team.ELEMENTS.boardList = childList
            dataList[index] = team
            store.commit('D_CHANNEL/MU_RECENT_CHANGE_TEAM', creTeamKey)
          } else {
            dataList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
            index = dataList.findIndex((item) => item.teamKey === creTeamKey)
            team = dataList[index]
            childList = team.ELEMENTS.alimList
            contIndex = childList.findIndex((item) => item.contentsKey === targetKey)
            childList[contIndex] = data
            team.ELEMENTS.alimList = childList
            dataList[index] = team
            store.commit('D_CHANNEL/MU_RECENT_CHANGE_TEAM', creTeamKey)
          }
        }
        await store.dispatch(ActName, dataList).then(() => {
          return true
        })
      }
    }
  },
  getDetail (type, targetKey) {
    var dataList
    var result
    if (type === 'TEAM') {
      dataList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
      result = dataList.filter(data => data.teamKey === targetKey)
      /* if (result === undefined || result === '' || result.length === 0) {
        var paramMap = new Map()
        paramMap.set('teamKey', targetKey)
        methods.getTeamList(paramMap).then(resultList => {
          store.commit('D_CHANNEL/MU_ADD_MAIN_CHAN_LIST', resultList.data.content[0])
          result = dataList.filter(data => data.teamKey === targetKey)
          return result
        })
      } else {
        return result
      } */
      return result
    }
  },
  getBoardCabinetDetail (teamDetail, targetKey) {
    var cabinetList
    var cabinetDetail
    if (!teamDetail) return null
    cabinetList = teamDetail.ELEMENTS.cabinetList
    cabinetDetail = cabinetList.filter(cab => cab.cabinetKey === Number(targetKey))
    /* if (cabinetDetail.length === 0) {
      // eslint-disable-next-line no-new-object
      var param = new Object()

      param.currentTeamKey = teamDetail.teamKey
      param.cabinetKey = targetKey
      var response = methods.getCabinetDetail(param)

      if (response) {
        cabinetDetail = response.mCabinet
        teamDetail.ELEMENTS.cabinetList.push(cabinetDetail)
        await functions.actionVuex('TEAM', teamDetail, teamDetail.teamKey, false, true, null, null)
      }
    } */
    console.log('return:  cabinetDetail')
    console.log(cabinetDetail)
    return cabinetDetail
  },
  getContentsDetail (teamDetail, targetKey, teamKey) {
    var detailData
    var dataList
    if (!targetKey) return null
    if (!teamDetail) {
      debugger
      if (teamKey) {
        var teamList = store.getters['D_CHANNEL/GE_MAIN_CHAN_LIST']
        var result = teamList.filter(data => data.teamKey === teamKey)
        if (result) {
          teamDetail = result[0]
        } else {
          return null
        }
      }
    // } else {
    //   return null
    }
    console.log(teamDetail)
    console.log(teamDetail.ELEMENTS)
    detailData = teamDetail.ELEMENTS.boardList.filter(cab => cab.contentsKey === Number(targetKey))
    console.log('boardList')
    console.log(detailData)
    if (detailData && detailData.length !== 0) {
      return detailData
    } else {
      detailData = teamDetail.ELEMENTS.alimList.filter(cab => cab.contentsKey === Number(targetKey))

      console.log('alimList')
      console.log(detailData)
      return detailData
    }
  },
  async addChanList (teamKey) {
    var paramMap = new Map()
    if (teamKey === undefined || teamKey === null) return 'teamKey정보가 누락되었습니다.'
    paramMap.set('teamKey', teamKey)
    paramMap.set('fUserKey', store.getters['D_USER/GE_USER'].userKey)
    console.log('############# addChanList ############')
    console.log(paramMap)
    var resultList = await methods.getTeamList(paramMap)

    console.log(resultList)

    var response = resultList.data.content[0]
    var team = null
    response.teamTypeText = commonMethods.teamTypeString(response.teamType)
    var title = '[더알림]' + commonMethods.changeText(response.nameMtext)
    var message = commonMethods.changeText(response.memoMtext)
    // response.copyTextStr = await commonMethods.makeShareLink(response.teamKey, 'chanDetail', message, title)

    response.detailPageYn = true
    var teamList = functions.getDetail('TEAM', teamKey)
    if (teamList && teamList.length > 0) {
      team = teamList[0]
      response.ELEMENTS = team.ELEMENTS
      await store.dispatch('D_CHANNEL/AC_REPLACE_CHANNEL', response)
    } else {
      await store.dispatch('D_CHANNEL/AC_ADD_CHANNEL', response)
    }
    // await functions.actionVuex('TEAM', response, response.teamKey, false, true)
  },
  recvNoti (e) {
    var message
    try {
      if (isJsonString(e.data) === true) {
        message = JSON.parse(e.data)
      } else {
        message = e.data
      }
      if (message.type === 'pushmsg') {
        if (JSON.parse(message.pushMessage).noti.data.item !== undefined && JSON.parse(message.pushMessage).noti.data.item.data !== undefined && JSON.parse(message.pushMessage).noti.data.item.data !== null && JSON.parse(message.pushMessage).noti.data.item.data !== '') {
          notiDetail = JSON.parse(message.pushMessage).noti.data.item.data
        } else {
          notiDetail = JSON.parse(message.pushMessage).noti.data
        }
        if (JSON.parse(notiDetail.userDo).targetKind === 'CONT') {
          functions.settingAlimNoti(message)
        } else if (JSON.parse(notiDetail.userDo).targetKind === 'CABI') {
          functions.settingCabiNoti(message)
        } else if (JSON.parse(notiDetail.userDo).targetKind === 'TEAM') {
          functions.settingChanNoti(message)
        } else if (JSON.parse(notiDetail.userDo).targetKind === 'MEMO') {
          functions.settingMemoNoti(message)
        }
      }
    } catch (err) {
      console.error('메세지를 파싱할수 없음 ' + err)
    }
  },
  async settingCabiNoti (message) {
    await functions.addContents(JSON.parse(notiDetail.userDo).ISub, 'BOAR')
    /* if (Number(JSON.parse(notiDetail.userDo).userKey) === Number(g_user.userKey)) {
      return
    } */
    if (notiDetail.actYn === true || notiDetail.actYn === 'true') {
      if (JSON.parse(message.pushMessage).arrivedYn === true || JSON.parse(message.pushMessage).arrivedYn === 'true') {
        ;
      } else {
        this.openPop({ targetKey: JSON.parse(notiDetail.userDo).ISub, targetType: 'boardDetail', cabinetNameMtext: JSON.parse(notiDetail.userDo).targetName, value: notiDetail, pushOpenYn: true })
      }
    }
  },
  async addContents (targetKey, jobkindId) {
    // eslint-disable-next-line no-new-object
    var param = new Object()
    param.contentsKey = targetKey
    param.jobkindId = jobkindId
    var resultList = await methods.getContentsList(param)
    var detailData = resultList.content[0]
    store.dispatch('D_CHANNEL/AC_ADD_CONTENTS', [detailData])
  },
  async settingAlimNoti (message) {
    // alert('come')
    await functions.addContents(JSON.parse(notiDetail.userDo).targetKey, notiDetail.jobkindId)
    /* if (Number(JSON.parse(notiDetail.userDo).userKey) === Number(g_user.userKey)) {
      return
    } */
    /* var noti = await functions.getContentsDetail(null, JSON.parse(notiDetail.userDo).targetKey, notiDetail.creTeamKey)
    alert(JSON.stringify(noti))
    store.dispatch('D_UPDATE/AC_ADD_NEW_NOTI', noti) */
    if (notiDetail.actYn === true || notiDetail.actYn === 'true') {
      if (JSON.parse(message.pushMessage).arrivedYn === true || JSON.parse(message.pushMessage).arrivedYn === 'true') {
        ;
      } else {
        if (notiDetail.jobkindId === 'ALIM') {
          this.openPop({ targetKey: notiDetail.creTeamKey, nameMtext: notiDetail.creTeamName, targetContentsKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'chanDetail', value: notiDetail })
        } else if (notiDetail.jobkindId === 'BOAR') {
          this.openPop({ targetKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'boardDetail', cabinetNameMtext: JSON.parse(notiDetail.userDo).targetName, value: notiDetail, pushOpenYn: true })
        }
      }
    } else {
      if (JSON.parse(message.pushMessage).arrivedYn === true || JSON.parse(message.pushMessage).arrivedYn === 'true') {
        if (notiDetail.jobkindId !== 'BOAR') {
          // if (this.$route.path === '/') {
          //   this.$refs.mainRouterView.getMainBoard()
          // }
        }
      } else {
        this.openPop({ targetKey: notiDetail.creTeamKey, nameMtext: notiDetail.creTeamName, targetContentsKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'chanDetail', value: notiDetail })
      }
    }
  },
  async settingChanNoti (message) {
    if (Number(JSON.parse(notiDetail.userDo).userKey) === Number(g_user.userKey)) {
    }
    if (notiDetail.actType === 'FM' || notiDetail.actType === 'FL') {
      var chanDetail = await functions.getDetail('TEAM', JSON.parse(notiDetail.userDo).targetKey)
      if (!chanDetail || chanDetail.length === 0) return
      chanDetail[0].followerCount += 1
      store.dispatch('D_CHANNEL/AC_REPLACE_CHANNEL', chanDetail[0])
    }
    if (JSON.parse(message.pushMessage).arrivedYn === true || JSON.parse(message.pushMessage).arrivedYn === 'true') {
    } else {
      this.$router.replace({ path: '/' })
      if (notiDetail.actType === 'FL') {
        this.openPop({ targetKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'chanDetail', value: notiDetail, pushOpenYn: true })
      } else if (notiDetail.actType === 'ME' || notiDetail.actType === 'FM') {
        this.openPop({ targetKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'chanDetail', value: notiDetail, pushOpenYn: true })
      } else if (notiDetail.actType === 'MA') {
        this.openPop({ targetKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'chanDetail', value: notiDetail, pushOpenYn: true })
      }
    }
  },
  settingMemoNoti (message) {
    if (notiDetail.actYn === true || notiDetail.actYn === 'true') {
      if (JSON.parse(message.pushMessage).arrivedYn === true || JSON.parse(message.pushMessage).arrivedYn === 'true') {

      } else {
        if (notiDetail.jobkindId === 'ALIM') {
          this.openPop({ targetKey: notiDetail.creTeamKey, targetContentsKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'chanDetail', value: notiDetail })
        } else if (notiDetail.jobkindId === 'BOAR') {
          this.openPop({ targetKey: JSON.parse(notiDetail.userDo).targetKey, targetType: 'boardDetail', cabinetNameMtext: JSON.parse(notiDetail.userDo).targetName, value: notiDetail, pushOpenYn: true })
        }
      }
    }
  }
}

export default {
  install (Vue) {
    Vue.config.globalProperties.$getMainBoard = functions.getMainBoard
    Vue.config.globalProperties.$actionVuex = functions.actionVuex
    Vue.config.globalProperties.$getDetail = functions.getDetail
    Vue.config.globalProperties.$getBoardCabinetDetail = functions.getBoardCabinetDetail
    Vue.config.globalProperties.$getContentsDetail = functions.getContentsDetail
    Vue.config.globalProperties.$addChanList = functions.addChanList
  }
}
