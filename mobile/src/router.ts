import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Nav.vue'

Vue.use(Router)

const RouterMap = [
  {
    path: '/',
    name: 'nav',
    component: () => import('@/views/Nav.vue')
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: () => import('@/views/Forecast.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/Article/Article.vue')
  },
  {
    path: '/article/:id/',
    name: 'articleDetail',
    component: () => import('@/views/Article/ArticleDetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/Comment.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/Team/Team.vue')
  },
  {
    path: '/team/:team/',
    name: 'teamDetail',
    component: () => import('@/views/Team/TeamDetail.vue')
  },
  {
    path: '/match',
    name: 'match',
    component: () => import('@/views/Match.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('@/views/Report/Report.vue')
  },
  {
    path: '/report/add',
    name: 'addReport',
    component: () => import('@/views/Report/AddReport.vue')
  },
  {
    path: '/timeLine',
    name: 'timeLine',
    component: () => import('@/views/TimeLine.vue')
  },
  {
    path: '/premierLeague',
    name: 'premierLeague',
    component: () => import('@/views/PremierLeague.vue')
  },
  {
    path: '/bet/add',
    name: 'addBet',
    component: () => import('@/views/Bet/AddBet.vue')
  },
  {
    path: '/bet/detail',
    name: 'betsDetail',
    component: () => import('@/views/Bet/BetsDetail.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('@/views/Me.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router:any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouterMap
})

router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = localStorage.Token
  if (isLogin) {
    if (to.path === '/login' || to.path === '/register') {
      next('/me')
    } else {
      next()
    }
  } else {
    if (to.path === '/me') {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
