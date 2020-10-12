import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// const xxx = () => import("../../xxx")
const Home = () => import("../components/MainContent.vue")
const first = () => import("../view/first.vue")
const mat = () => import("../components/mat/mat.vue")
const about = () => import("../components/aboutUs/aboutUs.vue")
const contactUs = () => import("../components/contactUs/contactUs.vue")
const brancase = () => import("../components/brandCase/brandCase.vue")
const heshun = () => import("../components/heShun/heShun.vue")
const seign = () => import("../components/classSeign/classAll.vue")
const city = () => import("../components/cityHome/cityAll.vue")
const desige = () => import("../components/design/design.vue")
const special = () => import("../components/special/special.vue")
const urban = () => import("../components/urban/urban.vue")

const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: Home,
    meta: {
      title: '禾顺文化(深圳)有限公司'
    },
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '禾顺文化(深圳)有限公司'
        },
        component: first
      },
      {
        path: '/urban',
        name: 'urban',
        meta: {
          title: '城市形象设计',
          index: 2
        },
        component: urban
      },
      {
        path: '/special',
        name: 'special',
        meta:{
          title: '特色小镇',
          index: 2
        },
        component: special
      },
      {
        path: '/mat',
        name: 'mat',
        meta:{
          title: '数据化',
          index: 2
        },
        component: mat
      },
      {
        path: '/desige',
        name: 'desige',
        meta:{
          title: '影视特效',
          index: 2
        },
        component: desige
      },
      {
        path: '/about',
        name: 'about',
        meta:{
          title: '联系我们'
        },
        component: about
      },
      {
        path: '/heshun',
        name: 'heshun',
        meta:{
          title: '智慧城市',
          index: 2
        },
        component: heshun,
      },
      {
        path: '/contactus',
        name: 'contactUs',
        meta:{
          title: '关于我们'
        },
        component: contactUs
      },
      {
        path: '/brancase',
        name: 'brancase',
        meta:{
          title: '品牌案例'
        },
        component: brancase
      },
      {
        path: '/seign',
        name: 'classSeign',
        meta:{
          title: '文化活动室内设计',
          index: 2
        },
        component: seign
      },
      {
        path: '/city',
        name: 'city',
        meta:{
          title: '城市馆',
          index: 2
        },
        component: city
      },
    ]
  }
]

const router = new Router({
  routes
})

export default router;