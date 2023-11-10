<template>
   <div class="wrapper">
		<div class="card">
			<div class="left">
				<form @submit.prevent="createRecipe">
					<h2>Жор үүсгэх</h2>
					<input v-model="newRecipe.foodName" placeholder="Нэр" required />
					<input v-model="newRecipe.image" placeholder="Зураг" required />
					<input v-model="newRecipe.description" placeholder="Тайлбар" required />
					<input v-model="newRecipe.rating" placeholder="Үнэлгээ" required />
					<input v-model="newRecipe.category" placeholder="Төрөл" required />
					<input v-model="newRecipe.cookTime" placeholder="Хугацаа /мин/" required />
					<input v-model="newRecipe.ingredients" placeholder="Орц найрлага" required />
					<textarea v-model="newRecipe.instructions" placeholder="Зааварчилгаа" rows="10" required></textarea>
					<button class="create-btn">Нэмэх</button>
				</form>
			</div>
			<div class="right">
				<h2>Таны үүсгэсэн жорнууд</h2>
				<div class="recipe">
					<ul>
						<li v-for="recipe in recipes" :key="recipe.id">
							{{ recipe.category }}
							{{ recipe.image }}
							{{ recipe.description }}
							<button @click="editRecipe(recipe.id)">Edit</button>
							<button @click="deleteRecipe(recipe.id)">Delete</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
   </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie } from '@/services'
import crudService from '@/services/crudService'

export default {
	async asyncData({req, redirect}) {
		if (process.server) {
			const user = getUserFromCookie(req)
			if (!user) {
				redirect("/login")
			}
			const recipes = await crudService.read()
			return { recipes }
		} else {
			let user = firebase.auth().currentUser
			if (!user) {
				redirect("/login")
			}
		}
	},
	data() {
		return {
			recipes: [],
			newRecipe: {
				foodName: '',
				image: '',
				description: '',
				rating: '',
				category: '',
				cookTime: '',
				instructions: '',
				ingredients: '',
			}
		}
	},
	// async fetch() {
	// 	await this.readRecipe()
	// },
	methods: {
		// async readRecipe() {
		// 	try {
		// 		const data = await crudService.read()
		// 		// console.log(data)
		// 		return { data }
		// 	} catch (err) {
		// 		console.log(err)
		// 	}
		// },
		async createRecipe() {
			try {
				await crudService.create(this.newRecipe)
				this.recipes = await crudService.read()
				alert('Амжилттай жор нэмлээ')
				this.newRecipe = ''
			} catch (err) {
				console.log(err)
			}
		},
		async deleteRecipe(id) {
			try {
				await crudService.delete(id)
				this.recipes = await crudService.read()
			} catch (err) {
				console.log(err)
			}
		},
		async editRecipe() {
		}
	},
	head() {
    return {
      title: "Профайл"
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  padding: 0 5rem;
	background-color: #eee;
}

.card {
	border-radius: 20px;
	width: 100%;
	background-color: white;
	display: flex;
  flex-direction: row;
	padding: 2rem;
	margin: 40px 0;
}

.left {
  width: 50%;
}

form {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

form h2 {
	color: var(--primary-text);
}

form input {
	border: 1px solid var(--primary-border);
	border-radius: 5px;
	height: 50px;
	padding: 0 15px;
	outline: none;
	font-size: 16px;
}

form input:hover, textarea:hover {
  background: #EDEFF1;
}

form input:focus, textarea:focus {
	border-color: gray;
}

form textarea {
	border: 1px solid var(--primary-border);
	border-radius: 5px;
	padding: 15px;
	outline: none;
	font-size: 16px;
}

.create-btn {
	border: 1px solid var(--green);
	border-radius: 5px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  background: var(--green);
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease;
}

.create-btn:hover {
	border: 1px solid #138E1B;
  background: #138E1B;
}

.right {
	width: 50%;
  text-align: center;
}

.recipe {
	border: 1px solid var(--primary-border);
	padding: 1rem;
}

</style>