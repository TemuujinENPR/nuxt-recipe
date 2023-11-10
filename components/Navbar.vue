<template>
  <div class="header">
    <nuxt-link to="/"><h3>Recipe</h3></nuxt-link>
    <nav>
      <ul>
        <li><nuxt-link to="/">Нүүр</nuxt-link></li>
        <li><nuxt-link to="/recipes">Жор</nuxt-link></li>
        <li><nuxt-link to="/profile">Профайл</nuxt-link></li>
      </ul>
    </nav>
    <div class="auth">
      <nuxt-link to="/login"><button class="login-btn">Нэвтрэх</button></nuxt-link>
      <nuxt-link to="/register"><button class="register-btn">Бүртгүүлэх</button></nuxt-link>
      <button class="logout-btn" v-if="loggedIn" @click="logout">Гарах</button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'

export default {
  name: "Navbar",
  mounted() {
    this.setupFirebase()
  },
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.loggedIn = true
          alert("Та амжилттай нэвтэрлээ")
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => {
              Cookies.set("access_token", token)
            })
        } else {
          this.loggedIn = false
          alert("Та гарахдаа итгэлтэй байна уу?")
          Cookies.remove("access_token")
        }
      })
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push("/")
      })
    }
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid var(--primary-border);
  width: 100%;
  height: 80px;
  padding: 0 5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h3 {
  color: #333;
}

nav {
  width: fit-content;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 10px;
  padding: 8px 15px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

nav a {
  color: #333;
  text-decoration: none;
}

.login-btn {
  border: 2px solid var(--green);
  border-radius: 5px;
  padding: 14px 24px;
  background: white;
  font-weight: bold;
  color: var(--green);
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s ease;
}

.login-btn:hover {
  border: 2px solid #138E1B;
  color: white;
  background: #138E1B;
}

.register-btn {
  border: 2px solid var(--blue);
  border-radius: 5px;
  padding: 14px 24px;
  background: var(--blue);
  font-weight: bold;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s ease;
}

.register-btn:hover {
  background: #14619C;
}

.logout-btn {
  border: 2px solid var(--primary-text);
  border-radius: 5px;
  padding: 14px 24px;
  background: var(--primary-text);
  font-weight: bold;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s ease;
}

.logout-btn:hover {
  background: black;
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
  }
}
</style>