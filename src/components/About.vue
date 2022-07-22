<template>
  <section id="personal">
    <div class="head">
      <h2>
        <span class="ul">About <span class="me">Me</span></span>
      </h2>
    </div>
    <div class="about-me">
      <div class="image">
        <img
          src="https://i.postimg.cc/hPzQLtcR/AboutMe.jpg "
          alt="An Image of Myself"
          class="LcImg"
        />
      </div>
      <div class="info">
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
    </div>
  </section>
  <section id="skills">
    <!-- <ul class="list">
      <li class="list-item">Education</li>
      <li class="list-item">|</li>
      <li class="list-item">Skills</li>
    </ul> -->
    <div class="tab-content">
      <h2 class="title">Skills</h2>
      <div class="learnt">
        <div class="group1">
          <div class="flipcard">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <i class="fa-brands fa-html5 icon"></i>
              </div>
              <div class="flipcard-back">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div class="flipcard">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <i class="fa-brands fa-css3 icon"></i>
              </div>
              <div class="flipcard-back">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div class="flipcard">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <i class="fa-solid fa-database icon"></i>
              </div>
              <div class="flipcard-back">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="group2">
          <div class="flipcard">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <i class="fa-brands fa-js icon"></i>
              </div>
              <div class="flipcard-back">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div class="flipcard">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <i class="fa-brands fa-vuejs icon"></i>
              </div>
              <div class="flipcard-back">
                <h3>Vue JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
        <h2 class="title">Education</h2>
      <div class="education">
        <div v-for="education in resume" :key="education.id" class="mobile">
          <div class="school">
            <h2>{{ education.place }}</h2>
            <p>{{ education.time }}</p>
          </div>
          <div class="lca">
            <h3>{{ education.occupation }}</h3>
            <p>{{ education.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      resume: [
        {
          id: "1",
          place: "Life Choices Academy",
          time: "2022 - 2022",
          occupation: "Intern",
          desc: "Currently studying at LCA ",
        },
        {
          id: "2",
          place: "Curro Meridian Pinehurst",
          time: "2017 - 2021",
          occupation: "Student",
          desc: "Matriculated from Meridian Pinehurst with a Bachelors Pass ",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* Bio */
#personal {
  display: flex;
  flex-direction: column;
}

.head {
  display: flex;
  justify-content: center;
}

.list {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 25px;
}

.list-item {
  padding-right: 15px;
  font-size: 25px;
}

.about-me {
  display: flex;
  margin-top: 20px;
}

.image {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: scale-down;
}

.LcImg {
  width: 500px;
  height: 300px;
  border-radius: 10%;
}



.info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  font-size:20px;
}

.ul {
  border-bottom: 3px solid black;
}

.me {
  color: #d08eea;
}

/* Tab */
/* .tab-content {
  position: absolute;
} */

.title{
  text-align: center;
}

/* Skills */
#skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.flipcard {
  background-color: transparent;
  width: 20%;
  aspect-ratio: 1;
  perspective: 1000px;
}

.flipcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flipcard:hover .flipcard-inner {
  transform: rotateY(180deg);
}

.flipcard-front,
.flipcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flipcard-front {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flipcard-back {
  background-color: #68626d;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.flipcard-back > h3 {
  font-size:30px;
}

.group1 {
  display: flex;
  justify-content: center;
}

.group2 {
  display: flex;
  justify-content: center;
}

.icon {
  margin-right: 10px;
  width: 20%;
  display: flex;
  justify-content: center;
}

.fa-html5 {
  font-size: 150px;
  color: #ff0000;
}

.fa-css3 {
  font-size: 150px;
  color: #264de4;
}

.fa-database {
  font-size: 150px;
  color: #00758f;
}

.fa-js {
  font-size: 150px;
  color: #f0db4f;
}

.fa-vuejs {
  font-size: 150px;
  color: #42b883;
}

.education {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.mobile{
border: 2px solid #68626d;
margin-left:15px;
}

.school {
  width: 50%;
  /*  class="title" */
}

.lca {
  justify-content: center;
}

@media only screen and (max-width:1200px){
  .about-me{
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width:800px){
  .LcImg{
    width: 400px;
  }

.fa-html5 {
  font-size: 75px;
}

.fa-css3 {
  font-size: 75px;
}

.fa-database {
  font-size: 75px;
}

.fa-js {
  font-size: 75px;
}

.fa-vuejs {
  font-size: 75px;
}
}


@media only screen and (max-width:750px){
.education{
  flex-direction: column;
}

.mobile{
  width:500px;
  margin-bottom:15px;
}

}

@media only screen and (max-width:600px){
  .LcImg{
    width: 250px;
    height: 200px;
  }

.info{
  margin-top:10px;
}

  .info > p{
    font-size: 13px;
  }

  .flipcard-back > h3{
    font-size: 13px;
  }

.mobile{
  width:250px;
}


}

@media only screen and (max-width:375px){
    .fa-html5 {
  font-size: 50px;
}

.fa-css3 {
  font-size: 50px;
}

.fa-database {
  font-size: 50px;
}

.fa-js {
  font-size: 50px;
}

.fa-vuejs {
  font-size: 50px;
}
}

</style>
