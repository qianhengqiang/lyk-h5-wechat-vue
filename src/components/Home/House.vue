<template>
    <div>

    </div>
</template>

<script>
    import houseColumn from '@/components/';
    export default {
        name: "House",
        data(){
          return {
              list: []
          }
        },
        mounted() {
            this.$service.housePosition().then(data=>{
                this.list = data.data.data
            })
        }
    }
</script>

<style scoped lang="scss">
    div{
        width: px2rem(200);
        height: px2rem(200);
        background:red;
    }
</style>