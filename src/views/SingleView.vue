<template>
  <div class="project-holder">
    <div class="project-img">
      <img :src="project.image" />
    </div>
    <div class="project-info">
      <div class="text">
        <h3>{{ project.name }}</h3>
        <p>{{ project.brief }}</p>
      </div>
      <div class="live">
        <h3>Check out:</h3>
        <a
          :href="project.github"
          class="fa-brands fa-github"
          target="_blank"
        ></a>
        <a :href="project.netlify" class="bx bxl-netlify" target="_blank"></a>
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
          name: "Bootstrap Portfolio",
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
          type: "CSS",
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
  computed: {
    project() {
      return this.projects.find((project) => project.id == this.id);
    },
  },
};
</script>
<style scoped>
.project-holder {
  display: flex;
}

.project-info {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
}
</style>
