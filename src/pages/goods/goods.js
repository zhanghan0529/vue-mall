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
    imgsList:null,
    skuType: null,
    showSku: false,
    skuNum : 1,
    isAddcart:false,
    showMessage:false
  },
  created() {
      this.getDetails()
  },
  methods: {
    getDetails() {
      axios.get(url.details,{id}).then(res => {
        this.details = res.data.data;
        this.imgsList = [];
        this.details.imgs.forEach((item,index) => {
          this.imgsList.push({
            clickUrl:'javascript:void(0)',
            image:item
          })
        });
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
    },
    chooseSku(type){
      this.skuType = type;
      this.showSku = true;
    },
    closeSku(){
      this.showSku = false;
      this.skuType = null;
    },
    addSku(num){
      if(num<0&&this.skuNum === 1){
        return
      }
      this.skuNum += num
      
    },
    addCart(){
      axios.post(url.add,{id,
        number: this.skuNum}).then(res=>{
        if(res.status ==200){
          this.showSku =false;
          this.skuType = null;
          this.isAddcart =true;
          this.showMessage =true
          setTimeout(()=>{
            this.showMessage =false
          },1000)
        }
      })
    }
  },
  watch:{
    showSku(val,oldVal){
      document.body.style.overflow = val ? 'hidden' : 'auto';
      document.querySelector('html').style.overflow = val ? 'hidden' : 'auto';
    }
  },
  mixins:[mixin]
})
