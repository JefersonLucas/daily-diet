import { MealDTO } from '@dtos/MealDTO'
import { mealRemove } from './mealRemove'
import { mealCreate } from './mealCreate'

export async function mealUpdate(id: string, meal: MealDTO) {
	try {
		await mealRemove(id)

		await mealCreate(meal)
	} catch (error) {
		throw error
	}
}
