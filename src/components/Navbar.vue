<template>
  <div class="sidebar">
    <button @click="toggleNav" class="toggle">Menu</button>
    <nav id="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/testimonials">Testimonials</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleNav() {
      this.active = !this.active;
    },
  },
  computed: {
    sidebar() {},
  },
};
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#navbar {
  display: flex;
  flex-direction: column;
  /* float: left; */
  /* position: fixed; */
  z-index: 1;
  transition: 0.3s ease;
  width: 7vw;
}

a {
  text-decoration: none;
  color: black;
  padding-right: 7px;
}
</style>
