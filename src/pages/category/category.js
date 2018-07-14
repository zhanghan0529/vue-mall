import Vue from 'vue';
import Foot from 'components/Foot.vue'
import axios from 'axios'
import url from 'js/api.js'

import 'css/common.css';
import './category.css';

Vue.config.productionTip = false

new Vue({
    el: "#app",
    data: {
        topList: null,
        subList: null,
        rank: null,
        isActive: 0,
        id: -1
    },
    components: {
        Foot
    },
    created() {
        this.getToplist()
        this.getIndex(0)
        
    },
    methods: {
        getToplist() {
            axios.get(url.topList).then(res => {
                this.topList = res.data.lists;
                // console.log(res.data.lists)
            })
            this.getRank()
        },
        getIndex(index,id) {
            // console.log(id)
            this.isActive = index;
            // this.id = id
            if (index === -1) {
                this.getRank()
            } else {
                axios.get(url.subList,{id}).then(res => {
                    this.subList = res.data
                })
            }
            // console.log(id)
        },
        getRank() {
            axios.get(url.rank).then(res => {
                this.rank = res.data.data
            })
        }
    }
})


