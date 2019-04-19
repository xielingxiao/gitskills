// import Vue from 'vue'
import Vuex from 'vuex'

import defaultSate from './state/state'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev, // Can't change state from outside
    state: defaultSate,
    getters,
    mutations,
    actions
  })
}
