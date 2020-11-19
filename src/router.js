import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './Page/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
},{
  path: '/spfl', 
  component: () => import('./Page/Spfl.vue')
},{
  path: '/shangpinliebiao', 
  component: () => import('./Page/ShangPinLieBiao.vue')
},{
  path: '/spdd', 
  component: () => import('./Page/Spdd.vue')
},{
  path: '/FangTaiGuanLi', 
  component: () => import('./Page/FangTaiGuanLi.vue')
},{
  path: '/FangXingGuanLi', 
  component: () => import('./Page/FangXingGuanLi.vue')
},{
  path: '/FangHaoGuanLi', 
  component: () => import('./Page/FangHaoGuanLi.vue')
},{
  path: '/kfdd', 
  component: () => import('./Page/Kfdd.vue')
}
  ]
})
