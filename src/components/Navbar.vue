<template>
    <nav id="navbar1">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/testimonials">Testimonials</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <button @click="showNavbar()" class="btn"><i class='bx bx-menu'></i></button>
    <nav id="navbar2" class="active">
      <div class="close-btn">
      <button @click="removeNavbar()" class="close"><i class='bx bx-exit-fullscreen' ></i></button>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/testimonials">Testimonials</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
</template>
<script>
export default {
  name: "Navbar",
  // data() {},
  methods: {},
  computed:{
    showNavbar() {
      document.querySelector("#navbar2").style.display = "flex";
    },
    removeNavbar() {
      document.querySelector("#navbar2").style.display = "none";
    },
  },
};
</script>
<style scoped>
#navbar1 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
  transition: 0.3s ease;
  width: 7vw;
  background-color: #ADA9BB;
  position: fixed;
  height: 100%;
}

#navbar2 {
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
  transition: 0.3s ease;
  width: 100%;
  background-color: #ADA9BB;
  position: fixed;
  height: 100%;
}

.close-btn{
  display:flex;
  justify-content: end;
}

.close{
  width: 50px;
}

a {
  text-decoration: none;
  color: black;
  padding-right: 7px;
  padding-top: 15px;
  font-size:19px;
}

.btn {
    height: 40px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bx{
  font-size: 25px;
}

@media only screen and (max-width:1310px){
  #navbar1{
    display: none;
    }

    #navbar{
      transition: all 0.6s linear;
    }



    a{
        font-size: 30px;

    }
}
</style>
