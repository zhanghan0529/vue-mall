import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';
import mixin from 'js/mixin.js';

import Swiper from 'components/Swiper.vue'

import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

Vue.config.productionTip = false
let id = location.search.replace(/^\?id=/g,'')
new Vue({
  el: '#app',
  components: {
    Swiper
  },
  data: {
    details: null,
    detailTab:['商品详情','本店成交'],
    godetailsTab: 0,
    dealList:null,
  },
  created() {
      this.getDetails()
  },
  methods: {
    getDetails() {
      axios.get(url.details,{id}).then(res => {
        this.details = res.data.data
      }) 
    },
    goTab(index){
        this.godetailsTab = index
        if(index){
            this.getSalesNum()
        }
       
    },
    getSalesNum(){
        axios.get(url.deal,{id}).then(res =>{
            this.dealList = res.data.data.lists
        })
    }
  },
  mixins:[mixin]
})
