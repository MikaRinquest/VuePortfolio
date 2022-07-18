<template>
  <section id="home">
    <div class="greeting">
      <h1>Hi, Welcome to My Portfolio</h1>
      <h2>Aspiring Web Developer</h2>
    </div>
    <div class="image">
      <img src="" alt="Placeholder" class="me" />
    </div>
  </section>
</template>
<script></script>
<style scoped>
#home {
  display: flex;
  min-height: 90vh;
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

.me {
  width: 500px;
}
</style>
