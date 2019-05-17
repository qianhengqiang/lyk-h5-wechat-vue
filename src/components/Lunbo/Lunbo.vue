<template>
    <swiper :options="swiperOption" v-if='swiperSlides.length'>
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><a :href="slide.link_url"><img :src="slide.img_url|imgSrc" alt=""></a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Lunbo",
        props:['swiperSlides'],
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                        //stopOnLastSlide: false
                    },
                    loop: true,
                    observeParents:true,
                    observer:true
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped lang="scss">
    .lunbo{
        height:100%;
        width:100%;
        position:absolute;
        top:0;
        left:0;
        img{
            width:100%;
            height:100%;
        }
    }

</style>