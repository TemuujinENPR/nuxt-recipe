<template>
  <div class="container">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  head() {
    return {
      title: "Нүүр"
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
  /* font-family: Arial, Helvetica, sans-serif; */
}

:root {
  --primary-text: #333;
  --primary-border: #ddd;
  --secondary-border: #eee;
  --green: #15A21E;
  --blue: #156BAD;
}
</style>
