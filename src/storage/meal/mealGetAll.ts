import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealDTO } from '@dtos/MealDTO'

export async function mealsGetAll() {
	try {
		// I retrieve all items
		const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

		// if it has items, perform a parse if not, it returns an empty array
		const meals: MealDTO[] = storage ? JSON.parse(storage) : []

		return meals
	} catch (error) {
		throw error
	}
}
