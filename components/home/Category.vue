<template>
  <section id="category">
    <h1>Төрөл</h1>
    <div class="card_wrapper">
      <div class="card" :key="category.id" v-for="category in categories">
        <div class="circle">
          <img :src="category.image" alt="category" />
        </div>
        <div class="meta">
          <h2>{{ category.name }}</h2>
          <p @click="navigate">{{ category.desciption }} <i class='bx bx-chevron-right'></i></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import food from '~/assets/images/home/category/food.png'
import dessert from '~/assets/images/home/category/dessert.png'
import drink from '~/assets/images/home/category/drink.png'

export default {
  name: "Category",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Хоол',
          desciption: 'Амтат хоолны жоруудыг харах',
          image: food,
        },
        {
          id: 2,
          name: 'Амттан',
          desciption: 'Амтат бялуу, шарвин зэрэг жоруудыг харах',
          image: dessert,
        },
        {
          id: 3,
          name: 'Уух зүйл',
          desciption: 'Амтад коктайл, смүүти зэрэг жоруудыг харах',
          image: drink,
        },
      ]
    }
  },
  methods: {
    navigate() {
      this.$router.push("/recipes")
    }
  }
}
</script>

<style scoped>
#category {
  /* border: 1px solid black; */
  width: 100%;
}

#category h1 {
  text-align: center;
  font-size: 3rem;
  color: var(--primary-text);
  margin: 60px 0;
}

.card_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
}

.card {
  /* border: 1px solid red; */
  text-align: center;
  width: 300px;
}

.circle {
  border: 1px solid black;
  border-radius: 50%;
  height: 280px;
  width: 280px;
  background-color: var(--primary-text);
  position: relative;
}

.circle img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
}


.meta h2 {
  color: #E84C4D;
  margin: 15px 0;
}

.meta p {
  color :var(--primary-text);
  cursor: pointer;
}

.meta p:hover {
  text-decoration: underline;
}

.meta i {
  position: absolute;
  font-size: 22px;
}

@media screen and (max-width: 1000px) {
  #category {
    justify-content: center;
  }
  .card_wrapper {
    flex-direction: column;
  }
}

</style>