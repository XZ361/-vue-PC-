import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path:'/orderList',
      name:'OrderListPage',
      component:OrderListPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      redirect:'/detail/analysis',
      children:[
     	{
     		// 子路由前无需加斜杠
	      path: 'analysis',
	      name: 'DetailAnaPage',
	      component: DetailAnaPage
	    },
	    {
     		// 子路由前无需加斜杠
	      path: 'count',
	      name: 'DetailCouPage',
	      component: DetailCouPage
	    }, 
	    {
     		// 子路由前无需加斜杠
	      path: 'forecast',
	      name: 'DetailForPage',
	      component: DetailForPage
	    }, 
	    {
     		// 子路由前无需加斜杠
	      path: 'publish',
	      name: 'DetailPubPage',
	      component: DetailPubPage
	    }, 
      ]
      
    }
  ]
})
