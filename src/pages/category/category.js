import Vue from 'vue';
import Foot from 'components/Foot.vue'
import axios from 'axios'
import url from 'js/api.js'

import 'css/common.css';
import './category.css';

Vue.config.productionTip = false

new Vue({
    el: "#app",
    data:{
        topList: null,
        isActive:0
    },
    components:{
        Foot
    },
    created() {
        this.getToplist()
    },
    methods:{
        getToplist(){
            axios.get(url.topList).then(res=>{
                this.topList = res.data.lists;
                // console.log(res.data.lists)
            })
        },
        getIndex(id){
            // console.log(id)
            this.isActive = id;
        }
    }
})


