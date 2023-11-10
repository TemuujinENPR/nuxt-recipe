<template>
  <div class="main">
    <br />
    <br />
    <Hero />
    <br />
    <br />
    <Category />
    <br />
    <br />
    <br />
    <br />
    <Recipe />
    <br />
    <br />
  </div>
</template>

<script>
import Hero from '~/components/home/Hero'
import Recipe from '~/components/home/Recipe'
import Category from '~/components/home/Category'

export default {
  components: {
    Hero,
    Recipe,
    Category,
  }
}
</script>

<style scope>
.main {
  padding: 0 5rem;
}

@media screen and (max-width: 480px) {
  .main {
    padding: 0 1rem;
  }
}
</style>
