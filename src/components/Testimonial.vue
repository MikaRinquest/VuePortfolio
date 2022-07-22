<template>
  <div id="hover">
    <div v-for="testimonial in testimonials" :key="testimonial.id">
      <div class="t-hold">
        <img :src="testimonial.image" class="t-image" />
        <div class="t-info">
          <h3>{{ testimonial.role }}</h3>
          <p>{{ testimonial.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: "1",
          name: "Jason Wandrag",
          role: "Lecturer",
          description: "lorem ipsum",
          image: "https://i.postimg.cc/nh2tF84G/jason.jpg",
        },
        {
          id: "2",
          name: "Clayton Charles Adonis",
          role: "Colleague",
          description:
            "He has an amazing work ethic, once he sets his mind on something he doesn't stop until it is done.",
          image: "https://i.postimg.cc/nrf81R3w/clayton.jpg",
        },
        {
          id: "3",
          name: "Chanique Chelsea Mansoor",
          role: "Colleague",
          description:
            "Mika is exceptional in the work he does, he is always willing to lend a helping hand. He is very passionate and will succeed in anything he does.",
          image: "https://i.postimg.cc/52bVW9Ct/chanique.jpg",
        },
        {
          id: "4",
          name: "Abdool Zaid Toorabally",
          role: "Colleague",
          description:
            "Mika is a fine young man, eloquent in his dealings and always willing to help others, quick and nimble in handling situations.",
          image: "https://i.postimg.cc/xCJr3cW6/abdool.jpg",
        },
        {
          id: "5",
          name: "Abu Bakr Khan",
          role: "Colleague",
          description:
            "Mika is a wonderful person that is always ready to help the next at any cost. All while still completing tasks on time and splendidy.",
          image: "https://i.postimg.cc/YqJv6WZs/abu.jpg",
        },
        {
          id: "6",
          name: "Isma'eel Adams",
          role: "Colleague",
          description:
            "Mika is exceptional in the work he does, he is always willing to lend a helping hand. He is very passionate and will succeed in anything he does.",
          image: "https://i.postimg.cc/HxBJXP1w/isma-eel.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
#hover {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-left: 30px;
}

.t-hold {
  position: relative;
  width: 300px;
  margin: 5px;
}

.t-info {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  width: 300px;
  aspect-ratio: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: all 0.1s linear;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.t-hold:hover .t-info {
  opacity: 1;
}

.t-image {
  width: 300px;
  height: 300px;
  border-radius: 3px;
  border: 3px solid #94602b;
}
</style>
