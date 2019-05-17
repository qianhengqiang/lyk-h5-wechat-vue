<template>
  <div class="home">
    <div class="top">
      <lunbo class="lunbo" :swiper-slides="swiperSlides"></lunbo>
      <div class="search">
        <p>
          <span class="region">温州</span>
          <span class="link" @click="goSearch"><i class="iconfont icon-chazhao1"></i> <span class="tip">请输入房源/专家/咨询的标题</span></span>
        </p>
      </div>
    </div>

    <div class="middle">
      <div class="middle-up">
        <router-link to="/chaizheng" class="up-box"><img :src="chaxunImg" alt=""></router-link>
        <router-link to="/houses" class="up-box"><img :src="fangwuImg" alt=""></router-link>
        <router-link to="/consult" class="up-box"><img :src="zixunImg" alt=""></router-link>

      </div>
      <div class="middle-down">
        <icon-text v-for="item in index4btn" :link="item.link" :img-url="item.imgUrl" :text="item.text"></icon-text>
      </div>
    </div>

    <div class="bottom">

      <div class="title">
        <p>
          <span class="tit-l">为您推荐</span>
          <span class="tit-r">
            <router-link to="/home/house" class="link" :class="{on:this.$route.path=='/home/house'}">房源</router-link>
            <router-link to="/home/information" class="link" :class="{on:this.$route.path=='/home/information'}">资讯</router-link>
            <router-link to="/home/experts" class="link" :class="{on:this.$route.path=='/home/experts'}">专家</router-link>
          </span>
        </p>
      </div>

      <router-view class="list"></router-view>

    </div>


  </div>
</template>

<style lang="scss" scoped>
  .top{
    height: px2rem(288);
    width:100%;
    /*background-color: red;*/
    position:relative;
    .search{
      position:absolute;
      bottom: px2rem(18);
      left: px2rem(68);
      width: px2rem(628);
      height: px2rem(68);
      border-radius: px2rem(6);
      margin:0 auto;
      background:white;
      border: px2rem(1) solid #ccc;
      z-index: 2;
      p{
        width:100%;
        height:100%;
        display: flex;
        justify-content: left;
        span.region{
          font-size: px2rem(28);
          line-height: px2rem(68);
          display: inline-block;
          background:white;
          text-align: center;
          float:left;
          width: px2rem(116);
          height:100%;
          border-radius: px2rem(6) 0 0 px2rem(6);
          border-right: px2rem(2) solid #ccc;
        }
        span.link{
          width: px2rem(628-116);
          display: flex;
          justify-content: left;
          line-height: px2rem(68);
          i{
            font-size: px2rem(38);
            padding-left: px2rem(16)
          }
          span.tip{
            font-size: px2rem(26);
            color:#999;
            padding-left: px2rem(12);
          }
        }
      }
     
    }
  }

  .middle{
    height: px2rem(380);
    display: flex;
    flex-direction: column;
    .middle-up{
      display: flex;
      justify-content: space-around;
      margin-top:px2rem(22);
      margin-bottom: px2rem(26);
      .up-box{
        width: px2rem(222);
        height: px2rem(154);
        background:red;
        border-radius: px2rem(10);
        img{
          width:100%;
        }
      }
    }
    .middle-down{
      height:px2rem(164);
      padding-bottom: px2rem(38);
      display: flex;
      justify-content: space-around;
    }
  }

  .bottom{
    width:px2rem(347*2);
    margin:px2rem(40) auto 0;
    display: flex;
    flex-direction: column;
    .title {
      p{
        display: flex;
        justify-content: space-between;
        .tit-l{
          font-size: px2rem(36);
          font-weight: bold;
        }
        .tit-r{
          font-size: px2rem(28);
          .link{
            padding-left:px2rem(46);
            color:#333;
          }
          .link.on{
            color:#489ffa;
          }
        }
      }

    }
    .list{
      margin-top: px2rem(36)
    }
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Lunbo from '@/components/Lunbo/Lunbo.vue'
import IconText from '@/components/IconText/IconText.vue'
import index4btn from '@/assets/json/index4button.js'
export default {
  name: "home",
  components: {
    Lunbo,
    IconText
  },
  data(){
    return {
      swiperSlides:[],
      chaxunImg:require('@/assets/images/pro/cx.png'),
      fangwuImg:require('@/assets/images/pro/fw.png'),
      zixunImg:require('@/assets/images/pro/zx.png'),
      index4btn
    }
  },
  methods:{
    goSearch(){

      this.$router.push('/search')
    }
  },
  mounted() {
    this.$service.indexSilder().then(data=>{
      this.swiperSlides = data.data.data
      console.log(this.swiperSlides)
    })
  }
};
</script>
