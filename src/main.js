import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import popper from "popper.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  document.documentElement.scrollTop = 0
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  popper,
  render: h => h(App)
})
