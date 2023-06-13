//引入vue_router
import { createRouter, createWebHistory } from 'vue-router'
//ES6  import输入  export 输出
// 模块化 默认私有，如何被别人使用？
// 通过export 输出
// 如何使用
// export default 默认输出
import Index from '@/views/static/index.vue'
//白名单
const whiteList = ['/', '/login']
import { useUserStore } from '../store/user'

//路由表
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/static/login.vue'), // 懒加载
  },
  {
    path: '/us_index', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'us_index', //命名路由
    component: () => import('@/views/users/index.vue'),
  },
  {
    path: '/us_address', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'us_address', //命名路由
    component: () => import('@/views/users/addressList.vue'),
  },
  {
    path: '/us_logs', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'us_logs', //命名路由
    component: () => import('@/views/users/log.vue'),
  },
  {
    path: '/us_level', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'us_level', //命名路由
    component: () => import('@/views/users/levelList.vue'),
  },
  // {
  //   path: '/', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
  //   name: 'index', //命名路由
  //   component: () => import('@/views/index.vue'), //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
  // },
  // {
  //   path: '/', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
  //   name: 'home', //命名路由
  //   component: Index, //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
  // },
  {
    path: '/ums_admin', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'ums_admin', //命名路由
    component: () => import('@/views/admin/ums_admin.vue'),
  },
  {
    path: '/sms_home_advertise', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'sms_home_advertise', //命名路由
    component: () => import('@/views/admin/sms_home_advertise.vue'),
  },

  {
    path: '/pms_brand', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'pms_brand', //命名路由
    component: () => import('@/views/admin/pms_brand.vue'),
  },
  {
    path: '/cms_member_report', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'cms_member_report', //命名路由
    component: () => import('@/views/admin/cms_member_report.vue'),
  },
  {
    path: '/oms_order_return_reason',
    name: 'oms_order_return_reason',
    component: () => import('@/views/admin/oms_order_return_reason.vue'),
  },
  {
    path: '/oms_company_address', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'oms_company_address', //命名路由
    component: () => import('@/views/admin/oms_company_address.vue'),
  },
  {
    path: '/ums_member_task', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'ums_member_task', //命名路由
    component: () => import('@/views/admin/ums_member_task.vue'),
  },
  {
    path: '/oms_order_setting',
    name: 'oms_order_setting',
    component: () => import('@/views/admin/oms_order_setting.vue'),
  },
  {
    path: '/cms_help_category', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'cms_help_category', //命名路由
    component: () => import('@/views/admin/cms_help_category.vue'),
  },
  {
    path: '/cms_topic_category', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'cms_topic_category', //命名路由
    component: () => import('@/views/admin/cms_topic_category.vue'),
  },
  {
    path: '/cms_log',
    name: 'cms_log',
    component: () => import('@/views/admin/cms_log.vue'),
  },
  {
    path: '/pms_product_category', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'pms_product_category', //命名路由
    component: () => import('@/views/admin/pms_product_category.vue'),
  },
  {
    path: '/ums_member_rule_setting', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'ums_member_rule_setting', //命名路由
    component: () => import('@/views/admin/ums_member_rule_setting.vue'),
  },
  {
    path: '/ums_member_level', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'ums_member_level', //命名路由
    component: () => import('@/views/admin/ums_member_level.vue'),
  },
  {
    path: '/cms_prefrence_area', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'cms_prefrence_area', //命名路由
    component: () => import('@/views/admin/cms_prefrence_area.vue'),
  },
  {
    path: '/sms_coupon', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'sms_coupon', //命名路由
    component: () => import('@/views/admin/sms_coupon.vue'),
  },
  {
    path: '/pms_feight_template', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'pms_feight_template', //命名路由
    component: () => import('@/views/admin/pms_feight_template.vue'),
  },
  {
    path: '/pms_product', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'pms_product', //命名路由
    component: () => import('@/views/admin/pms_product.vue'),
  },
  {
    path: '/pms_product_attribute_category', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'pms_product_attribute_category', //命名路由
    component: () => import('@/views/admin/pms_product_attribute_category.vue'),
  },
  {
    path: '/sms_flash_promotion', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'sms_flash_promotion', //命名路由
    component: () => import('@/views/admin/sms_flash_promotion.vue'),
  },
  {
    path: '/ums_member_tag', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'ums_member_tag', //命名路由
    component: () => import('@/views/admin/ums_member_tag.vue'),
  },
  {
    path: '/ums_menu_controller', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
    name: 'ums_menu_controller', //命名路由
    component: () => import('@/views/admin/ums_menu_controller.vue'),
  },
  {
    path: '/cms_subject_category',
    name: 'cms_subject_category',
    component: () => import('@/views/admin/cms_subject_category.vue'),
  },
  {
    path: '/sms_flash_promotion_session',
    name: 'sms_flash_promotion_session',
    component: () => import('@/views/admin/sms_flash_promotion_session.vue'),
  },
  {
    path: '/ums_resource_category',
    name: 'ums_resource_category',
    component: () => import('@/views/admin/ums_resource_category.vue'),
  },
  {
    path: '/pms_album',
    name: 'pms_album',
    component: () => import('@/views/admin/pms_album.vue'),
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/static/login.vue'), // 懒加载
  // },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue'), // 懒加载
  },
]
const router = createRouter({
  //模式
  history: createWebHistory(),
  routes,
})
//前置路由守卫
//用户状态 user.js
router.beforeEach((to, from, next) => {
  //如果是登录页则不需要验证直接跳转
  if (to.path == '/') {
    next()
    return;
  }


  // 获取本地登录状态
  let status = localStorage.getItem('status')

  if (!!status) {
    next()
  } else {
    next({ name: 'login' })
  }
  // const userStore = useUserStore()

  // if (whiteList.includes(to.path)) {
  //   // 在白名单中的路径可以无需验证直接访问
  //   next()
  // } else {
  //   if (userStore.token && userStore.token.length > 0) {
  //     // 用户已经登录，允许访问请求的路径
  //     next()
  //   } else {
  //     // 用户未登录，重定向到登录页面
  //     next({ name: 'login' })
  //   }
  // }
})

export default router
