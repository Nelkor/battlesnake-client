import Vue from 'vue'
import VueRouter from 'vue-router'

// modules' routes
import auth from '@auth/routes/auth-routes'
import profile from '@profile/routes/profile-routes'

import AppRoot from '@root/AppRoot'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppRoot,
    name: 'root',
  },

  // modules
  ...[
    auth,
    profile,
  ].flat(),

  // unrecognized path
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
