<template>
  <div class="wrapper">
    <h3>Recipe</h3>
    <p>© 2023 Бүх эрх хуулиар хамгаалагдсан</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.wrapper {
  height: 10vh;
  padding: 0 5rem;
  background-color: var(--primary-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}
</style>