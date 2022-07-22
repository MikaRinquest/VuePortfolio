<template>
  <div id="test">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* @font-face {
  font-family: Normal;
  src: url("../assets/fonts/ITC Stone Serif LT Italic.ttf");
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #484554;
  color: #f0f0f0;
  min-height: 100vh;
}
#test {
  display: flex;
  min-height: 90vh;
}

.navbar {
  display: flex;
  max-width: 10vw;
}

.content {
  width: 90vw;
  margin-left:8vw;
}

@media only screen and (max-width: 1410px){

}

@media only screen and (max-width:450px){
  .content{
    margin-left:0;
    }
}
</style>
