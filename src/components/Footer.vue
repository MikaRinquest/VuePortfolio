<template>
  <div id="footer">
    <div class="links">
      <a
        href="https://www.linkedin.com/in/mika-rinquest-975890237/"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i
      ></a>
      <a href="https://github.com/MikaRinquest" target="_blank">
        <i class="fa-brands fa-github"></i
      ></a>
      <a href="https://codepen.io/mikarinquest" target="_blank">
        <i class="fa-brands fa-codepen"></i
      ></a>
    </div>
    <div class="copyright">
      <p class="c-info">
        <i class="fa-solid fa-copyright"></i>
        2022 Mika Rinquest
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
#footer {
  min-height: 5vh;
  background-color: #b391c0;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}

.links {
  display: flex;
  justify-content: center;
}

.fa-linkedin:hover {
  color: #0c63bc;
}

.fa-github:hover {
  color: #1d1a1a;
}

.fa-codepen:hover {
  color: #1d1a1a;
}

.copyright {
  display: flex;
  justify-content: center;
}

.c-info {
  font-weight: 1000;
}
</style>
