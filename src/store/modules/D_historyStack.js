/* eslint-disable camelcase */

const D_historyStack = {
  namespaced: true,
  state: {
    archivingServerList: [],
    historyStack: [0],
    gPopStack: [],
    currentPage: null,
    removePage: 0,
    canRemoveYn: true,
    pageUpdate: 0,
    recvPushQueue: [],
    deepLinkQueue: [],
    axiosQueue: [],
    contentsAllClose: 0
  },
  mutations: {
    updateServerList (state, server) {
      state.archivingServerList = server // state의 account변수에 넘겨 받은 account값을 입력함
    },
    changeRemoveYn (state, blean) {
      state.canRemoveYn = blean // state의 account변수에 넘겨 받은 account값을 입력함
    },
    updateStack (state, stack) {
      state.historyStack = stack // state의 account변수에 넘겨 받은 account값을 입력함
    },
    updateGpopStack (state, stack) {
      state.gPopStack = stack // state의 account변수에 넘겨 받은 account값을 입력함
    },
    setRemovePage (state, page) {
      state.removePage = page
    },
    setCurrentPage (state, page) {
      state.currentPage = page
    },
    updatePage (state, page) {
      state.pageUpdate = page
    },
    addPushQueue (state, page) {
      state.recvPushQueue = page
    },
    changeDeepLinkQueue (state, page) {
      state.deepLinkQueue = page
    },
    updateAxiosQueue (state, page) {
      state.axiosQueue = page
    },
    contentCrearAll (state, count) {
      state.contentsAllClose = count
    }
  },
  actions: {
    AC_DELETE_AXIOS_QUEUE ({ commit, state }, payload) {
      var idx2 = state.axiosQueue.findIndex((item) => item === payload)
      if (idx2 !== -1) { var queue = state.axiosQueue.splice(idx2, 1) }
      commit('updateAxiosQueue', queue)
    },
    AC_UPDATE_HISTORY ({ commit }, payload) {
      commit('updateAxiosQueue', payload)
    },
    AC_UPDATE_GPOP_STACK ({ commit }, payload) {
      commit('updateGpopStack', payload)
    },
    AC_ADD_AXIOS_QUEUE ({ commit, state }, payload) {
      commit('updateAxiosQueue', payload.push(payload))
    },
    AC_GE_AXIOS_QUEUE ({ commit }, payload) {
      commit('updatePage', payload)
    },
    CONTENT_CREAR_ALL ({ commit }, payload) {
      commit('contentCrearAll', payload)
    }
  },
  modules: {
  },
  getters: {
    axiosQueue (state) {
      return state.axiosQueue
    },
    archServerList (state) {
      return state.archivingServerList
    },
    canRYn (state) {
      return state.canRemoveYn
    },
    GE_GPOP_STACK (state) {
      return state.gPopStack
    },
    hStack (state) {
      return state.historyStack
    },
    hRPage (state) {
      return state.removePage
    },
    hCPage (state) {
      return state.historyStack[state.historyStack.length - 1]
    },
    hUpdate (state) {
      return state.pageUpdate
    },
    pushQueue (state) {
      return state.recvPushQueue
    },
    deepLinkQueue (state) {
      return state.deepLinkQueue
    },
    GE_CONTENT_ALL_CREAR (state) {
      return state.contentsAllClose
    }
  }
}

export default D_historyStack
