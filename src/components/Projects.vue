<template>
  <div id="holder">
    <div v-for="project in projects" :key="project.id" class="flipcard">
      <!-- <div class="flipcard-inner">
        <div class="flipcard-front"> -->
      <router-link :to="{ name: 'SingleView', params: { id: project.id } }"
        ><img :src="project.image" class="project-img"
      /></router-link>
      <!-- <h3>{{ project.name }}</h3> -->
      <!-- </div>
        <div class="flipcard-back">
          <div class="back-holder">
            <h3>{{ project.type }}</h3>
            <p>{{ project.brief }}</p>
            <h4>View the code/ live links here:</h4>
            <p>
              <a
                :href="project.github"
                class="fa-brands fa-github"
                target="_blank"
              ></a>
              <a
                :href="project.netlify"
                class="bx bxl-netlify"
                target="_blank"
              ></a>
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: "1",
          name: "First portfolio",
          image: "https://i.ibb.co/0cddZsF/1-portfolio.png",
          brief: "First ever portfolio made.",
          github: "https://github.com/MikaRinquest/Mock-Portfolio.git",
          netlify: "https://relaxed-pie-a66d0f.netlify.app",
          type: "HTML",
        },
        {
          id: "2",
          name: "Calculator",
          image: "https://i.ibb.co/v47jSv0/1-calc.png",
          brief: "A functioning calculator made with javascript.",
          github: "https://github.com/MikaRinquest/Calculator.git",
          netlify: "https://poetic-creponne-631b3b.netlify.app",
          type: "JS ",
        },
        {
          id: "3",
          name: "Portfolio",
          image: "https://i.ibb.co/QvrZFqD/2-portfolio.png",
          brief: "A portfolio made using HTML, CSS and Bootstrap.",
          github: "https://github.com/MikaRinquest/Portfolio_Project.git",
          netlify: "https://mika-portfolio.netlify.app",
          type: "HTML",
        },
        {
          id: "4",
          name: "BMI Calculator",
          image: "https://i.ibb.co/cgwMhs5/bmi-calc.png",
          brief: "A calculator made that calculates one's body mass index.",
          github: "https://github.com/MikaRinquest/BMI-Calc.git",
          netlify: "https://bejewelled-biscochitos-3bfff1.netlify.app",
          type: "CSS",
        },
        {
          id: "5",
          name: "Temp Calculator",
          image: "https://i.ibb.co/4RvBTdT/temp-calc.png",
          brief:
            "A calculator that converts the temperature from Ceslius to Fahrenheit and vice-versa.",
          github: "https://github.com/MikaRinquest/Temp_Calc.git",
          netlify: "https://guileless-tanuki-e87f6d.netlify.app",
          type: "unknown",
        },
        {
          id: "6",
          name: "To-Do List",
          image: "https://i.ibb.co/CWVYvPV/todo.png",
          brief: "A functional to do list made with HTML, CSS and Javascript.",
          github: "https://github.com/MikaRinquest/ToDoList.git",
          netlify: "https://teal-cobbler-da2482.netlify.app",
          type: "JS",
        },

        // {
        //   id: "1",
        //   name: "",
        //   image: "",
        //   github: "",
        //   netlify: "",
        //   type: "",
        // },
      ],
    };
  },
};
</script>
<style scoped>
* {
  color: black;
}

#holder {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.flipcard {
  background-color: transparent;
  width: 30%;
  height: 300px;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.project-img {
  width: 300px;
  aspect-ratio: 1;
}

.flipcard-back {
  background-color: #68626d;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.back-holder {
  display: flex;
  flex-direction: column;
  flex-direction: column;
}

.fa-brands {
  color: white;
  text-decoration: none;
  padding-right: 5px;
  font-size: 25px;
}

.fa-brands:hover {
  color: #1d1a1a;
}

.bx {
  color: white;
  text-decoration: none;
  font-size: 25px;
}

.bx:hover {
  color: #00ad9f;
}
</style>
