// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import axios from 'axios'
import url from 'js/api'
import 'css/common.css'
import 'css/index.css'
Vue.config.productionTip = false

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    hotLists: null,
    isloading: true,
    isAll: false,
    pageNum: 1,
    pageSize: 6,
  },
  created() {
    // console.log(url.hotLists)
    this.getHotlists()
  },
  methods: {
    getHotlists() {
      if(this.isAll){
        this.isloading = false;
        return;
      }
      this.isloading = true
      axios({
        method: 'get',
        url: url.hotLists,
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
      }).then(res => {
        if(res.data.lists.length<this.pageSize){
          this.isAll = true;
        }
        if(this.hotLists){  
          this.hotLists = this.hotLists.concat(res.data.lists)
        }else{   
          this.hotLists = res.data.lists
        }
        this.pageNum++
        this.isloading =false
      })
      
      
    },
    // loadMore() {
    //   this.getHotlists()
    // }
  }
  // components: { App },
  // template: '<App/>'
})
