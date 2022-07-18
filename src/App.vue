<template>
  <div id="test">
    <div class="navbar">
      <Navbar />
    </div>
    <div>
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
  min-height: 100vh;
  background-color: #ebc7f9;
}
#test {
  display: flex;
}

.navbar {
  display: flex;
}
</style>
