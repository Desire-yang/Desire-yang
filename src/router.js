import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './Page/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    { 
      path: '/chongzhi',
      component: () => import('./Page/ChongZhiJiLu.vue')
    },{
      path: '/jifen',
      component: () => import('./Page/JiFen.vue')
  },{
    path: '/xiaofei',
    component: () => import('./Page/XiaoFeiJiLu.vue')
}
    
  ]
})
