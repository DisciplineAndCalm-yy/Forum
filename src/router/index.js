import Vue from 'vue'
import Router from 'vue-router'

const components = {
  Forum: () => import('@/views/forum'),
  Article: () => import('@/views/forum/article'),
  Posted: () => import('@/views/forum/posted'),
  Detail: () => import('@/views/forum/detail'),
  Reply: () => import('@/views/forum/reply'),
  Collect: () => import('@/views/forum/collect'),
  Draft: () => import('@/views/forum/draft'),
  Information: () => import('@/views/forum/information')
}
// 路由的解耦和

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Forum',
      component: components.Forum,
      children: [
      ]
    },
    {
      path: '/article',
      name: 'Article',
      component: components.Article
    },
    {
      path: '/posted',
      name: 'Posted',
      component: components.Posted
    },
    {
      path: '/detail',
      name: 'Detail',
      component: components.Detail
    },
    {
      path: '/collect',
      name: 'Collect',
      component: components.Collect
    },
    {
      path: '/reply',
      name: 'Reply',
      component: components.Reply
    },
    {
      path: '/draft',
      name: 'Draft',
      component: components.Draft
    },
    {
      path: '/information',
      name: 'Information',
      component: components.Information
    }
  ]
})
