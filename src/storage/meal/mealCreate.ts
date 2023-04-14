import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealGetAll'

import { MealDTO } from '@dtos/MealDTO'

export async function mealCreate(newMeal: MealDTO) {
	try {
		// I retrieve all items
		const storedMeals = await mealsGetAll()

		// recovers all previous items and adds the new meal
		const storage = JSON.stringify([...storedMeals, newMeal])

		// store in storage
		await AsyncStorage.setItem(MEAL_COLLECTION, storage)
	} catch (error) {
		throw error
	}
}
