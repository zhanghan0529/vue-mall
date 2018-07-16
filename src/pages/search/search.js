import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js'
import velocity from 'velocity-animate'
import mixin from 'js/mixin.js'

import 'css/common.css'
import './search.css'

let arr = location.search.split('&');
let {keyword,id} = {keyword:arr[0].replace(/\?keyword=/g,''),id:arr[1].replace(/id=/g,'')}
// console.log({keyword,id})
new Vue({
    el: '#app',
    data: {
        searchList: null,
        keyword: decodeURI(keyword),
        id:id,
        isShowtop: false
    },
    created() {
        this.getSearchlist();
        
    },
    methods: {
        getSearchlist() {
            axios.get(url.list,{keyword,id}).then(res=>{
                this.searchList = res.data.lists
            })
        },
        showTop(){
            if(document.documentElement.scrollTop>100 || document.body.scrollTop>100){
                this.isShowtop = true;
            }else{
                this.isShowtop = false;
            }
        },
        goTop(){
            velocity(document.documentElement,'scroll',{duration:300,offset: 0})
            this.isShowtop = false
        }
    },
    mixins:[mixin]
})