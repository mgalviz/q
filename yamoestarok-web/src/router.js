import Vue from 'vue'
import Router from 'vue-router'

/**
 * Layours
 */
import Login from './components/layouts/Login.vue'
import Dash from './components/layouts/Dashboard.vue'

/**
 * Views
 */

import NewProject from './components/views/NewProject.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/newproject',
      component: Dash,
      children: [
        {
          path: 'newproject',
          name: 'newproject',
          component: NewProject
        }
      ]
    },
    {
      path: '*',
      name: '404',
      redirect: '/',
    }
  ]
})
