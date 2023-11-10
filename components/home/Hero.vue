<template>
  <section id="hero">
    <div class="intro">
      <h1>{{ hero.title }}</h1>
      <p>{{ hero.description }}</p>
      <nuxt-link to="/register"><button class="start-btn">Эхлэх</button></nuxt-link>
    </div>
    <div class="intro">
      <div class="circle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      hero: {
        title: "Амтат жорнууд бүгд нэг дор",
        description: "Та манай сайтаар өөрийнхөө хүссэн төрөл бүрийн амтат хоол, зууш, уух зүйлсийн жорыг нэг дороос авах боломжтойгоос гадна өөрөө жор оруулж болох юм"
      },
    }
  }
}
</script>

<style scoped>
#hero {
  border-radius: 40px;
  width: 100%;
  height: 70vh;
  padding: 2rem 2.5rem;
  /* background: linear-gradient(#e66465, #9198e5); */
  background: linear-gradient(to right, var(--blue), var(--green));
  display: flex;
  flex-direction: row;
}

.intro {
  flex: 1;
}

.intro h1 {
  font-size: 4.2rem;
  color: white;
  text-transform: capitalize;
}

.intro p {
  font-size: 1.2rem;
  margin-top: 20px;
  color: var(--primary-text);
}

.start-btn {
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease;
  padding: 16px 36px;
  font-size: 16px;
  border: 1px solid #e66465;
  background-color: #e66465;
  margin-top: 40px;
  letter-spacing: 1px;
}

.start-btn:hover {
  background-color: #E84C4D;
  border-color: #E84C4D;
}

.intro:nth-child(even) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  border-radius: 50%;
  width: 420px;
  height: 420px;
  overflow: hidden;
  background-image: url('~/assets/images/home/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.circle img {
  height: 100%;
}

@media screen and (max-width: 1140px) {
  #hero {
    height: fit-content;
    flex-direction: column;
  }
  .circle {
    width: 400px;
    height: 400px;
  }
}

@media screen and (max-width: 690px) {
  #hero {
    height: fit-content;
  }
  .intro h1 {
    font-size: 3rem;
  }
  .intro:nth-child(even) {
    display: none;
  }
}
</style>