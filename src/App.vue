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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #2b2b2c;
  color: #f0f0f0;
  min-height: 100vh;
}
#test {
  display: flex;
  min-height: 95vh;
}

.navbar {
  display: flex;
  max-width: 7vw;
}
</style>
