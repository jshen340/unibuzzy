/* eslint-disable */ 
import { createStore } from 'vuex'

// 작성한 모듈을 가져옵니다.
import D_USER from '@/store/modules/D_userStore.js'
import D_HISTORY from '@/store/modules/D_historyStack.js'
import D_CHANNEL from '@/store/modules/D_channelStore.js'
import D_NOTI from '@/store/modules/D_notiStore.js'

import createPersistedState from 'vuex-persistedstate'

const storageState = createPersistedState({
  paths: ['D_USER', 'D_HISTORY', 'D_CHANNEL', 'D_CONTENTS']
  /* key: 'vuexStore',
  storage: window.sessionStorage */
})

const store = createStore({
  modules: {
    // 키: 값 형태로 저장됩니다.
    D_USER: D_USER,
    D_HISTORY: D_HISTORY,
    D_CHANNEL: D_CHANNEL,
    D_NOTI: D_NOTI
  },
  plugins: [storageState]
})

export default store
