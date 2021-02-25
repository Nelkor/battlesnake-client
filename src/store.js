import Vue from 'vue'
import Vuex from 'vuex'

// modules' stores
import auth from '@auth/store/auth-store'
import popUp from '@pop-up/store/pop-up-store'
import layout from '@layout/store/layout-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    popUp,
    layout,
  },
})
