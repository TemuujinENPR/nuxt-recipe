import * as firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
const collection = db.collection('recipes')

const crudService = {
  async create(data) {
    try {
      await collection.add(data)
      return true
    } catch (err) {
      console.log('Error creating data: ', err)
      throw(err)
    }
  },

  // async read() {
  //   const recipes = []
  //   const snapshot = await collection.get()

  //   snapshot.forEach((doc) => {
  //     recipes.push({
  //       id: doc.id,
  //       foodName: doc.data().foodName,
  //       image: doc.data().image,
  //       description: doc.data().description,
  //       rating: doc.data().rating,
  //       category: doc.data().category,
  //       cookTime: doc.data().cookTime,
  //       instructions: doc.data().instructions,
  //       ingredients: doc.data().ingredients,
  //     })
  //   })

  //   return { recipes }
  // },

  async read() {
    try {
      const snapshot = await collection.get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (err) {
      console.log('Error fetching data: ', err)
      throw(err)
    }
  },

  async update(id, data) {
    try {
      await collection.doc(id).update(data)
      return true
    } catch (err) {
      console.log('Error updating data: ', err)
      throw(err)
    }
  },

  async delete(id) {
    try {
      await collection.doc(id).delete()
      return true
    } catch (err) {
      console.log('Error deleting data: ', err)
      throw(err)
    }
  }
}

export default crudService
