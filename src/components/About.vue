<template>
  <main class="content">
    <section id="personal">
      <div class="image"></div>
      <div class="info">
        <h3><span class="ul">About Me</span></h3>
        <p>
          I am a quick learner that prefers to get things done as soon as
          possible. While I am an introvert with everyone except those I am
          comfortable with, I am always there to help when someone needs
          assistance. Occasionally, I enjoy hiking mountains but prefer the
          indoors. In the beginning, I became interested in Tech because when I
          would see a website or a game, I would wonder how much work or what
          exactly the team behind it did to make it happen. When I saw an
          advertisement for the internship at Life Choices Academy, I saw the
          opportunity to learn more about coding.
        </p>
      </div>
    </section>
    <section id="skills"></section>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
.content {
  min-height: 90vh;
}

#personal {
  display: flex;
}

.image {
  width: 40%;
}

.info {
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.ul {
  border-bottom: 3px solid black;
}
</style>
