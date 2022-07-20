<template>
  <main class="holder">
    <div class="location">
      <h2>Contact Details</h2>
      <p>Email Address : rinquestmika@gmail.com</p>
      <p>Phone number : 081 707 9992</p>
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
.holder {
  display: flex;
  height: 95vh;
  overflow-x: hidden;
  width: 90vw;
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
</style>
