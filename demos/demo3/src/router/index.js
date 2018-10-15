import Vue from 'vue'
import Router from 'vue-router'
import Parent from '../views/communictation/Parent.vue'
import Dynamic from '../views/dynamicRoute/Dynamic.vue'
import China from '../views/nestedRoutes/China'
import Beijing from '../views/nestedRoutes/Beijing'
import Shanghai from '../views/nestedRoutes/Shanghai'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
