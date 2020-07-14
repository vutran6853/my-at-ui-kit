import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AtComponents from 'at-ui'
import 'at-ui-style'    // Import CSS

Vue.use(AtComponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
