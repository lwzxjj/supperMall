import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () => import('views/home/home.vue')
const Cart = () => import('views/cart/cart.vue')
const Category = () => import('views/category/category.vue')
const Profile = () => import('views/profile/profile.vue')

Vue.use(VueRouter)

// 配置路由
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'perfile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出路由
export default router