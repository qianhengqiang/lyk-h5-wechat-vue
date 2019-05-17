<template>
    <div id="footer">
        <router-link class="nav-cell" :class="{on:'/home'===this.$route.path || '/' === this.$route.path}" to="/home" ><span><i class="iconfont icon-home"></i><span>首页</span></span></router-link>
        <router-link class="nav-cell" :class="{on:'/houses'===this.$route.path}" to="/houses"><span><i class="iconfont icon-fangchan"></i><span>找房</span></span></router-link>
        <router-link class="nav-cell" :class="{on:'/publish'===this.$route.path}" to="/publish"><span><i class="iconfont icon-fabu"></i><span>发布</span></span></router-link>
        <router-link class="nav-cell" :class="{on:'/information'===this.$route.path}" to="/information"><span><i class="iconfont icon-zixun1"></i><span>咨询</span></span></router-link>
        <router-link class="nav-cell" :class="{on:'/profile'===this.$route.path}" to="/profile"><span><i class="iconfont icon-yonghu"></i><span>我的</span></span></router-link>
    </div>
</template>

<script>
    export default {
        name: "FooterNat"
    }
</script>

<style scoped lang="scss">
    #footer{

        position:fixed;
        bottom:0;
        display: flex;
        justify-content: space-around;
        height:px2rem(104);
        padding-bottom: px2rem(12);
        .nav-cell{
            color:#666;
            width:px2rem(750/5);
            height:px2rem(104);
            /*position:absolute;*/
            /*top:0;*/
            span:first-child{
                display: flex;
                height:px2rem(104);
                flex-direction: column;
                i{
                    font-size: px2rem(48);
                    padding-top: px2rem(16);
                }
                span{
                    font-size:px2rem(28);
                    height:px2rem(38);
                    padding:px2rem(1) auto;
                }
            }
        }
        .nav-cell.on{
            color:#489ffa;
        }

    }
</style>