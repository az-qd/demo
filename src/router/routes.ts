import type { RouteRecordRaw } from 'vue-router'

const Login = () => import('../views/login/index.vue')
const Home = () => import('../views/home/index.vue')
const error = () => import('../views/404/index.vue')
const index = () => import('../views/index/index.vue')
const position = () => import('../views/position/index.vue')
const statistics = () => import('../views/statistics/index.vue')
const devicemanage = () => import('../views/devicemanage/index.vue')
const ibms = () => import('../views/ibms/index.vue')
const cartrajectory = () => import('../views/cartrajectory/index.vue')

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', name: 'Index', component: index },
      { path: '/position', name: 'Position', component: position },
      { path: '/statistics', name: 'Statistics', component: statistics },
      { path: '/ibms', name: 'Ibms', component: ibms },
      { path: '/devicemanage', name: 'Devicemanage', component: devicemanage }
    ]
  },
  {
    path: '/cartrajectory',
    name: 'Cartrajectory',
    component: cartrajectory
  },
  {
    path: '/404',
    name: '404',
    component: error
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Any',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]
