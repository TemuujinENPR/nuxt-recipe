<template>
  <div class="wrapper">
    <div class="register">
      <div class="left">
        <h1>Бүртгүүлэх</h1>
        <form @submit.prevent="pressed">
          <div class="box">
            <label for="">Нэр</label>
            <input type="text" placeholder="Хэрэглэгчийн нэр" v-model="username">
          </div>
          <div class="box">
            <label for="">Имэйл</label>
            <input type="text" placeholder="Имэйл хаяг" v-model="email">
          </div>
          <div class="box">
            <label for="">Нууц үг</label>
            <input type="password" placeholder="Нууц үг" v-model="password">
          </div>
          <div class="box">
            <label for="">Нууц үг давтах</label>
            <input type="password" placeholder="Нууц үг давтах" v-model="confirmPassword">
          </div>
          <button>Бүртгүүлэх</button>
          <div class="navigate">
            <p>Аль хэдийн бүртгэлтэй юу?</p>
            <nuxt-link style="color: var(--blue);" to="/login">Нэвтрэх</nuxt-link>
          </div>
        </form>
        <div class="error" v-if="error">{{ error.message }}</div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.push("/profile")
        })
        .catch(error => this.error = error)
    }
  },
  head() {
    return {
      title: "Бүртгүүлэх"
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
}

.register {
  border: 1px solid #ddd;
  border-radius: 15px;
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.left {
  width: 50%;
  padding: 2rem 3rem;
  text-align: center;
}

.left h1 {
  color: var(--primary-text);
  text-transform: uppercase;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

form .box {
  display: flex;
  flex-direction: column;
}

form label {
  text-align: start;
  text-transform: uppercase;
  color: gray;
  font-size: 12px;
}

form input {
  border: 1px solid var(--primary-border);
  border-radius: 10px;
  height: 50px;
  padding-left: 16px;
  font-size: 16px;
  outline: none;
  margin-top: 8px;
}

form input:hover {
  background: #EDEFF1;
}

form input:focus {
  border-color: gray;
}

form button {
  border: 1px solid var(--blue);
  border-radius: 30px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  background: var(--blue);
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease;
}

form button:hover {
  border: 1px solid #14619C;
  background: #14619C;
}

form .navigate {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}

.right {
  width: 50%;
  overflow: hidden;
  background-image: url('~/assets/images/auth/ghibli.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.error {
  color: red;
}

@media screen and (max-width: 980px) {
  .left {
    flex: 2;
    padding: 2rem 8rem;
  }
  .right {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .left {
    padding: 2rem 3rem;
  }
}

@media screen and (max-width: 480px) {
  .wrapper {
    padding: 0 1rem;
  }
}
</style>