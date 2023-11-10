<template>
  <section id="new">
    <h1>Шинээр нэмэгдсэн</h1>
    <div class="card_wrapper">
      <div :key="recipe.id" v-for="recipe in recipes" class="card">
        <div class="image">
          <div class="save">
            <i class='bx bxs-heart'></i>
          </div>
          <img :src="recipe.image" alt="Food Image" />
        </div>
        <div class="content">
          <h3 class="food-name">{{ recipe.foodName }}</h3>
          <p class="description">{{ recipe.description }}</p>
          <div class="rating">
            <span>★ {{ recipe.rating }}</span>
            <!-- <span class="star" v-for="n in recipe.rating" :key="n">★</span> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import background from '~/assets/images/home/hero.jpg'

export default {
  name: "Recipe",
  data() {
    return {
      recipes: [
        {
          id: 1,
          foodName: 'Амтат паста',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 5,
          image: background,
        },
        {
          id: 2,
          foodName: 'Гриллдэж болгосон бургер',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 4.8,
          image: background,
        },
        {
          id: 3,
          foodName: 'Терамисү',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 4.9,
          image: background,
        },
        {
          id: 4,
          foodName: 'Мексик Тако',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 4.8,
          image: background,
        },
        {
          id: 5,
          foodName: 'Тактуритан',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 5,
          image: background,
        },
        {
          id: 6,
          foodName: 'Сангёпсал',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 5,
          image: background,
        },
        {
          id: 7,
          foodName: 'Хавай пизза',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 5,
          image: background,
        },
        {
          id: 8,
          foodName: 'Үхрийн махан стейк',
          description: 'Бүрж шарсан амтат тахиа, шинэ ногооны салат, төмсний нухаш, ил гал дээр болгосон хонины...',
          rating: 5,
          image: background,
        },
      ]
    }
  }
}
</script>

<style scoped>

#new h1 {
  text-align: center;
  font-size: 3rem;
  color: var(--primary-text);
  margin: 60px 0;
}

.card_wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 30px;
}

.card {
  border: 1px solid var(--secondary-border);
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  height: 360px;
}

.image {
  /* border: 1px solid red; */
  position: relative;
  overflow: hidden;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.image img {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.3s;
  z-index: -10;
}

.image:hover img {
  position: absolute;
  transform: scale(1.05);
}

.save {
  border-radius: 50%;
  padding: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: var(--primary-text);
  background-color: white;
  font-size: 14px;
  z-index: 100;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
}

.save:hover {
  color: white;
  background-color: #E84C4D;
}

.content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 160px;
  cursor: pointer;
  color: var(--primary-text);
}

.food-name {
  margin: 0;
}

.description {
  color: gray;
  font-size: 1rem;
}

.rating {
  font-size: 14px;
  color: #EA971E;
  display: flex;
  flex-direction: column;
}

.rating span {
  align-self: flex-end;
}

@media screen and (max-width: 1189px) {
  .card_wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 30px;
  }
}

@media screen and (max-width: 1000px) {
  .card_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 30px;
  }
}

@media screen and (max-width: 760px) {
  .card_wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
    row-gap: 30px;
  }
}

</style>