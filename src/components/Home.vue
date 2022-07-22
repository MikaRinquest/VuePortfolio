<template>
  <section id="home">
    <div class="greeting">
      <h1>Hi, Welcome to My Portfolio</h1>
      <h2>Aspiring Web Developer</h2>
    </div>
    <div class="image">
      <!-- <img
        src="https://i.ibb.co/fxc5B8z/Mika-Rinquest.jpg"
        alt="Placeholder"
        class="myself"
      /> -->
    </div>
  </section>
</template>
<script></script>
<style scoped>
#home {
  display: flex;
  min-height: 90vh;
  background-image: url("https://i.postimg.cc/2yYk5SN6/home.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.greeting {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
}

.image {
  width: 40%;
  display: flex;
}

.myself {
  width: 500px;
}
</style>
