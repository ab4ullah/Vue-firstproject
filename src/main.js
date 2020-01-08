import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'


import HelloWorld from './components/HelloWorld';
import Second from './components/Second';
import Third from './components/Third';
import DataTable from './components/dataTable';


Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({

  routes : [
   
    {path: "/data", component:Second},
    {path: "/datatable", component:DataTable},
    {path: "/about", component:Third},
    {path: "/", component:HelloWorld}
  ]
})

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')

