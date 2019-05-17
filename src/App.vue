<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
      <footer-nat></footer-nat>
    </div>

<!--    <router-view />-->
  </div>
</template>

<style lang="scss" scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
  import FooterNat from "@/components/FooterNat/FooterNat.vue"
  import "@/assets/reset.css"
  import "@/assets/font/iconfont.css"
  export default {
    name: "app",
    data(){
      return{}
    },
    components: {
      FooterNat
    }
  }
</script>