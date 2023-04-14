import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealsGetAll } from './mealGetAll'

export async function mealRemove(id: string) {
	try {
		const storage = await mealsGetAll()

		const mealsFilterd = storage.filter((meal) => meal.id !== id)

		const meals = JSON.stringify(mealsFilterd)

		await AsyncStorage.setItem(MEAL_COLLECTION, meals)
	} catch (error) {
		throw error
	}
}
