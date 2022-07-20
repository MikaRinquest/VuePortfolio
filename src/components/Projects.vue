<template>
  <div id="holder">
    <div v-for="project in projects" :key="project.id">
      <div class="flipcard">
        <div class="flipcard-inner">
          <div class="flipcard-front">
            <img :src="project.image" />
            <h3>{{ project.name }}</h3>
          </div>
          <div class="flipcard-back">
            <h3>HTML</h3>
            <p>The first language learnt when coming to Lifechoices</p>
          </div>
        </div>
      </div>
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
          image: "",
          brief: "First ever portfolio made.",
          github: "https://github.com/MikaRinquest/Mock-Portfolio.git",
          netlify: "https://relaxed-pie-a66d0f.netlify.app",
          type: "HTML",
        },
        {
          id: "2",
          name: "Calculator",
          image: "",
          brief: "A functioning calculator made with javascript.",
          github: "https://github.com/MikaRinquest/Calculator.git",
          netlify: "https://poetic-creponne-631b3b.netlify.app",
          type: "JS ",
        },
        {
          id: "3",
          name: "Portfolio",
          brief: "A portfolio made using HTML, CSS and Bootstrap.",
          github: "https://github.com/MikaRinquest/Portfolio_Project.git",
          netlify: "https://mika-portfolio.netlify.app",
          type: "HTML",
        },
        {
          id: "4",
          name: "BMI Calculator",
          image: "",
          brief: "A calculator made that calculates one's body mass index.",
          github: "https://github.com/MikaRinquest/BMI-Calc.git",
          netlify: "https://bejewelled-biscochitos-3bfff1.netlify.app",
          type: "CSS",
        },
        {
          id: "5",
          name: "Temp Calculator",
          image: "",
          brief:
            "A calculator that converts the temperature from Ceslius to Fahrenheit and vice-versa.",
          github: "https://github.com/MikaRinquest/Temp_Calc.git",
          netlify: "https://guileless-tanuki-e87f6d.netlify.app",
          type: "unkown",
        },
        {
          id: "6",
          name: "To-Do List",
          image: "",
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
.group1 {
  display: flex;
  justify-content: center;
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
}
</style>
