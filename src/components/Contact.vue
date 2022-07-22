<template>
  <main id="holder">
    <div class="location">
      <h2>Contact Details</h2>
      <h4 class="details1">Email Address :</h4>
      <p class="details2">rinquestmika@gmail.com</p>
      <h4 class="details1">Phone number :</h4>
      <p class="details2">081 707 9992</p>
    </div>
    <div class="contact">
      <h2>Or send a message</h2>
      <form action="https://formspree.io/f/xrgjvnob" method="POST" class="form">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Insert your name and surname"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Insert your email address"
          required
        />
        <textarea name="message" id="message"></textarea>
        <button type="submit" class="submit">Send Message</button>
      </form>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
#holder {
  display: flex;
  height: 95vh;
  overflow-x: hidden;
  width: 90vw;
}

.details1 {
  font-size: 17px;
}

.location {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
}

#fullname {
  margin-top: 10px;
  width: 500px;
}

#email {
  margin-top: 10px;
  width: 500px;
}

#message {
  margin-top: 10px;
  width: 500px;
  height: 200px;
}

.submit {
  margin-top: 10px;
  width: 150px;
  align-self: center;
}

@media only screen and (max-width: 950px) {
  #holder {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 560px) {
  #fullname {
    width: 300px;
  }

  #email {
    width: 300px;
  }

  #message {
    width: 300px;
  }
}

@media only screen and (max-width: 430px) {
  .location {
    font-size: 15px;
  }

  .details1 {
    font-size: 13px;
  }

  .details2 {
    font-size: 11;
  }

  .contact {
    font-size: 15px;
  }
}

@media only screen and (max-width: 355px) {
  .location {
    font-size: 13px;
  }

  .contact {
    font-size: 13px;
    text-align: center;
  }
}

@media only screen and (max-width: 370px) {
  #fullname {
    width: 200px;
  }

  #email {
    width: 200px;
  }

  #message {
    width: 200px;
  }
}
</style>
