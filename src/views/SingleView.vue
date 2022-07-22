<template>
  <div class="holder">
    <div class="card">
      <div class="name">
        <h2>{{ project.name }}</h2>
      </div>
      <div class="image">
        <img :src="project.image" class="p-image" />
      </div>
      <div class="info">
        <div class="type">
          <h4>[ {{ project.type }} ]</h4>
        </div>
        <div class="desc">
          <p>{{ project.brief }}</p>
        </div>
        <div class="border"></div>
        <div class="p-links">
          <div class="git">
            <p class="words">
              Github:
              <a
                :href="project.github"
                class="bx bxl-github"
                target="_blank"
              ></a>
            </p>
          </div>
          <div class="net">
            <p class="words">
              / Netlify:<a
                :href="project.netlify"
                class="bx bxl-netlify"
                target="_blank"
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
  data() {
    return {
      id: this.$route.params.id,
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
  computed: {
    project() {
      return this.projects.find((project) => project.id == this.id);
    },
  },
};
</script>
<style scoped>
.holder {
  display: flex;
  justify-content: center;
}

.card {
  background-color: #c9b253;
  color: black;
  width: 400px;
  margin-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  border: 5px solid #45433d;
}

.name {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  padding-right: 5px;
  background: #c9b253;
  box-shadow: 2px 2px 0px #8b7b39, -2px -2px 0px #ffe96d;
}

.image {
  display: flex;
  justify-content: center;
}

.p-image {
  border: 5px solid #706647;
  width: 372px;
  height: 348px;
}

.info {
  background-color: #ffbc85;
  margin: 10px;
  border: 5px solid #4c4637;
}

.desc {
  padding-bottom: 25px;
}

.border {
  border-top: 1px solid black;
  width: 325px;
  margin-left: 5px;
}

.p-links {
  display: flex;
  justify-content: end;
}

.words {
  display: inline-flex;
}

.bxl-github {
  padding-right: 3px;
  text-decoration: none;
  font-size: 20px;
  color: black;
}

.bxl-netlify {
  padding-right: 3px;
  text-decoration: none;
  color: #00ad9f;
  font-size: 20px;
}

@media only screen and (max-width: 475px) {
  .card {
    width: 350px;
    border: 4px solid #45433d;
  }

  .p-image {
    width: 300px;
    border: 4px solid #706647;
  }

  .info {
    border: 4px solid #4c4637;
  }

  .border {
    width: 275px;
  }
}

@media only screen and (max-width: 420px) {
  .content {
    width: 90vw;
  }

  .card {
    width: 250px;
    min-height: 400px;
    border: 3px solid #45433d;
  }

  .p-image {
    width: 175px;
    height: 200px;
    border: 3px solid #706647;
  }

  .info {
    border: 3px solid #4c4637;
  }

  .border {
    width: 175px;
  }

  .p-links {
    justify-content: center;
  }
}
</style>
