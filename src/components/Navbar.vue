<template>
  <nav id="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
#navbar {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 25px;
  border: 1px solid transparent;
  background-color: transparent;
  min-height: 5vh;
}

a {
  text-decoration: none;
  color: black;
  padding-right: 7px;
}
</style>
