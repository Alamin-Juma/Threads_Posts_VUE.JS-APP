<template>

<AppHead>
    <title>Vue.js 3 Master Class Forum</title>
    <meta name="description" content="An awesome Vue.js 3 powered forum!">

    <!-- Social -->
    <meta property="og:title" content="Vue.js 3 Master Class Forum">
    <meta property="og:description" content="An Awesome Vue.js 3 powered forum!">
    <meta property="og:image" content="https://vueschool.io/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg">

    <!-- Twitter -->
    <meta name="twitter:title" content="Vue.js 3 Master Class Forum">
    <meta name="twitter:description" content="An Awesome Vue.js 3 powered forum!">
    <meta name="twitter:image" content="https://vueschool.io/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg">
    <meta name="twitter:card" content="summary_large_image">
  </AppHead>
  <the-navbar/>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- use our temmplate -->
    <!-- <PageHome /> -->
    <!-- <page-home /> -->
    <!-- router view will render home page component  -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import PageHome from "@/components/PageHome";


export default {
  name: "App",
  // components: {
  //   HelloWorld,
  //   PageHome,
  // },
};
</script>

<style>
@import "assets/style.css";
#nprogress .bar{
  background: #57AD8D !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
