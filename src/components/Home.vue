<template>
  <section id="home">
    <div class="animate__animated animate__backInUp card"> 
      <div class="name">
        <h2>Mika Rinquest</h2>
      </div>
      <div class="image">
        <img src="https://i.postimg.cc/pXyM64qT/Mika-Rinquest.jpg" class="p-image" />
      </div>
      <div class="info">
        <div class="type">
          <h4>[ Aspiring FullStack Developer ]</h4>
        </div>
        <div class="desc">
          <p>Learn more about me through my portfolio.</p>
        </div>

      </div>
    </div> 
  </section>
</template>
<script></script>
<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  background-image: url("https://i.postimg.cc/50cmbVzP/home-loop.gif");
  background-repeat: no-repeat;
  background-size: 100%;
}
/* Card */
.card {
  background-color: #A086B7;
  color: black;
  width: 400px;
  height: 500px;
  padding-right: 10px;
  padding-left: 10px;
  border: 5px solid #45433d;
}

.name {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  padding-right: 5px;
  background: #A086B7;
  box-shadow: 2px 2px 0px #88729c, -2px -2px 0px #b89ad2;
}

.image {
  display: flex;
  justify-content: center;
}

.p-image {
  border: 5px solid #565359;
  width: 372px;
  height: 348px;
}

.info {
  background-color: #D78CB8;
  margin: 10px;
  border: 5px solid #4c4637;
}

.desc {
  padding-bottom: 25px;
}

@media only screen and (max-width:1220px){
  #home{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
}

@media only screen and (max-width: 475px) {
  .card {
    width: 350px;
    border: 4px solid #45433d;
  }

  .p-image {
    width: 300px;
    border: 4px solid #565359;
  }

  .info {
    border: 4px solid #4c4637;
  }
}

@media only screen and (max-width: 420px) {
  .card {
    width: 250px;
    height: 370px;
    border: 3px solid #45433d;
  }

  .p-image {
    width: 150px;
    height: 175px;
    border: 3px solid #565359;
  }

  .info {
    border: 3px solid #4c4637;
  }
}
</style>
