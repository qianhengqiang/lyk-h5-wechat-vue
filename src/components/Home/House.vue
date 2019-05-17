<template>
    <div>
        <house-column v-for="item in list" :item="item"></house-column>
    </div>
</template>

<script>
    import houseColumn from '@/components/ListColumn/HouseColumn';
    export default {
        name: "House",
        components:{
            houseColumn
        },
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
        width:100%;
    }
</style>