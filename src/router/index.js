import Vue from 'vue'
import Router from 'vue-router'
import Companies from '@/components/Companies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListCompanies',
      component: Companies
    }
  ]
})
