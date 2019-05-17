<template>
    <router-link :to="link" class="down-box">
        <img :src="imgUrl" alt="">
        <span>{{text}}</span>
    </router-link>
</template>

<script>
    export default {
        name: "IconText",
        props: ['imgUrl','link','text']
    }
</script>

<style scoped lang="scss">
    .down-box{
        width: px2rem(114);
        height: px2rem(162);
        display: flex;
        flex-direction: column;
    img{
        width: px2rem(114);
        height: px2rem(114);
        flex:none
    }
    span{
        font-size: px2rem(28);
        padding-top: px2rem(162-114-28);
        color:#333;
    }
    }
</style>