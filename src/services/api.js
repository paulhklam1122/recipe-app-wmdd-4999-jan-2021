import axios from 'axios'

import { APP_ID, APP_KEY, BASE_URL } from '../config/api_config'

export const getRecipes = async recipeName => {
  const url = BASE_URL
  try {
    const response = await axios.get(url, {
      params: {
        q: recipeName,
        app_id: APP_ID,
        app_key: APP_KEY
      }
    })

    const recipes = response.data.hits

    return recipes
  } catch (error) {
    throw error
  }
}

export const getRecipe = async recipeUri => {
  const encodedUri = encodeURIComponent(recipeUri)

  const api_call = await fetch(
    `${BASE_URL}?r=${encodedUri}&app_id=${APP_ID}&app_key=${APP_KEY}`
  )

  const data = await api_call.json()

  const recipe = data[0]

  return recipe
}
