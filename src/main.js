// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import resource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'

Vue.use(resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 根组件为Layout
  components: { Layout },
  template: '<Layout/>'
})
