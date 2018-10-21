import Vue from 'vue'
import Router from 'vue-router'
import Parent from '../views/communictation/Parent'
import Dynamic from '../views/dynamicRoute/Dynamic'
import China from '../views/nestedroutes/China'
import Beijing from '../views/nestedroutes/Beijing'
import Shanghai from '../views/nestedroutes/Shanghai'
import ES6 from '../views/es6/es6.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ES6',
      component: ES6
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/dynamic/:dynamicId',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/china',
      name: 'China',
      component: China,
      children: [
        {
          path: 'beijing',
          name: 'Beijing',
          component: Beijing
        },
        {
          path: 'shanghai',
          name: 'Shanghai',
          component: Shanghai
        }
      ]
    }
  ]
})
