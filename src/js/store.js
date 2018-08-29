import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

Vue.use(Vuex)

const state = {
  correct: 0,
  questionsNo: 0,
  all: "allFromStore",
  questions: "questionsFromStore",
}

const mutations = {
  correctAnwser (state, n) {
    state.correct += n
  },
}

const getters = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  // plugins: [vuexLocal.plugin]
})