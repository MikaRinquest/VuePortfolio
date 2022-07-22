<template>
  <h2 class="heading">PROJECTS</h2>
  <div class="tut">
    <div class="help">
      <p>Click on a project to view more information on it.</p>
    </div>
  </div>
  <div id="holder">
    <div v-for="project in projects" :key="project.id" class="flipcard">
      <!-- <div class="flipcard-inner">
        <div class="flipcard-front"> -->
      <router-link
        :to="{ name: 'SingleView', params: { id: project.id } }"
        class="link"
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
          image: "https://i.postimg.cc/RFV7ktMT/1-portfolio.png",
          brief: "First ever portfolio made.",
          github: "https://github.com/MikaRinquest/Mock-Portfolio.git",
          netlify: "https://relaxed-pie-a66d0f.netlify.app",
          type: "HTML",
        },
        {
          id: "2",
          name: "Calculator",
          image: "https://i.postimg.cc/wBk542dv/1-calc.png",
          brief: "A functioning calculator made with javascript.",
          github: "https://github.com/MikaRinquest/Calculator.git",
          netlify: "https://poetic-creponne-631b3b.netlify.app",
          type: "JS ",
        },
        {
          id: "3",
          name: "Bootstrap Portfolio",
          image: "https://i.postimg.cc/Gt4k21T8/2-portfolio.png",
          brief: "A portfolio made using HTML, CSS and Bootstrap.",
          github: "https://github.com/MikaRinquest/Portfolio_Project.git",
          netlify: "https://mika-portfolio.netlify.app",
          type: "HTML",
        },
        {
          id: "4",
          name: "BMI Calculator",
          image: "https://i.postimg.cc/xCxvnd8V/bmi-calc.png",
          brief: "A calculator made that calculates one's body mass index.",
          github: "https://github.com/MikaRinquest/BMI-Calc.git",
          netlify: "https://bejewelled-biscochitos-3bfff1.netlify.app",
          type: "CSS",
        },
        {
          id: "5",
          name: "Temp Calculator",
          image: "https://i.postimg.cc/CLZNMbbP/temp-calc.png",
          brief:
            "A calculator that converts the temperature from Ceslius to Fahrenheit and vice-versa.",
          github: "https://github.com/MikaRinquest/Temp_Calc.git",
          netlify: "https://guileless-tanuki-e87f6d.netlify.app",
          type: "unknown",
        },
        {
          id: "6",
          name: "To-Do List",
          image: "https://i.postimg.cc/QMDkqPww/todo.png",
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

.heading {
  text-align: center;
  color: white;
  padding-bottom: 15px;
}

.tut {
  display: flex;
  justify-content: end;
  margin-right: 90px;
  height: 150px;
  background-color: red;
  font-size: 20px;
  height: 50px;
  box-shadow: 0px 0px 10px 5px red;
  display: flex;
  flex-wrap: wrap;
}

.help {
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
  margin-bottom: 30px;
}

.project-img {
  width: 300px;
  aspect-ratio: 1;
  transition: transform 0.2s;
}

.link {
  padding-right: 10px;
}

.project-img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px 5px #9e70ba;
}

@media only screen and (max-width: 1150px) {
  .tut {
    justify-content: center;
  }

  .flipcard {
    width: 40%;
  }
}

@media only screen and (max-width: 850px) {
  #holder {
    flex-direction: column;
    justify-content: center;
  }

  .tut {
    justify-content: center;
    width: 200px;
  }

  .flipcard {
    width: 100%;
  }
}

@media only screen and (max-width: 350px) {
  #holder {
    flex-direction: column;
    justify-content: center;
  }

  .tut {
    justify-content: center;
  }

  .project-img {
    width: 250px;
    margin-right: 30px;
  }
}

/*
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.back-holder {
  display: flex;
  flex-direction: column;
  flex-direction: column;
} */
</style>
