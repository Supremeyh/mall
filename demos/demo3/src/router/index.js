import Vue from 'vue'
import Router from 'vue-router'
import Parent from '../views/communictation/Parent'
import Dynamic from '../views/dynamicRoute/Dynamic'
import China from '../views/nestedroutes/China'
import Beijing from '../views/nestedroutes/Beijing'
import Shanghai from '../views/nestedroutes/Shanghai'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'China',
      component: China
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
