<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for = 'list in lists' :key = 'list.id'>
            <a class="js-no-follow" :href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.image">
            </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style>
.swiper-slide a {
  width: 100%!important;
  height: 100%;
}
</style>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Swiper",
  props: {
    lists: {
      required: true
    }
  },
  mounted(){
   let zzz= new Swiper('.swiper-container', {
      pagination:  {
        el: '.swiper-pagination',
      },
      loop: true,
      effect:'fade',
      autoplay:{
          delay:5000
      },
      speed: 400,
    })
  }
};
</script>

