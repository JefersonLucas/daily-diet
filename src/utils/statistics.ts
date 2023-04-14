import { MealDTO } from '@dtos/MealDTO'

function totalItens(array: MealDTO[]) {
	return array.length
}

function dietMealsOrderedByTime(array: MealDTO[]) {
	return array
		.sort((a, b) => {
			if (a.hour > b.hour) {
				return 1
			}
			if (b.hour > a.hour) {
				return -1
			}
			return 0
		})
		.map(({ isOnTheDiet }) => isOnTheDiet)
}

function totalMealsOnTheDiet(array: MealDTO[]) {
	return array.filter(({ isOnTheDiet }) => isOnTheDiet).length
}

function totalMealsOutOnTheDiet(array: MealDTO[]) {
	return array.filter(({ isOnTheDiet }) => !isOnTheDiet).length
}

function calculatePercentage(
	onTheDiet: number,
	outOntheDiet: number,
	total: number,
) {
	if (onTheDiet === outOntheDiet) {
		return '50,00'
	}

	if (onTheDiet > outOntheDiet) {
		return ((onTheDiet * 100) / total).toFixed(2).replace('.', ',')
	}

	if (outOntheDiet > onTheDiet) {
		return ((outOntheDiet * 100) / total).toFixed(2).replace('.', ',')
	}
}

function longestTrueSequence(booleanArray: boolean[]) {
	let maxLength = 0
	let currentLength = 0

	for (let i = 0; i < booleanArray.length; i++) {
		if (booleanArray[i] === true) {
			currentLength++
			if (currentLength > maxLength) {
				maxLength = currentLength
			}
		} else {
			currentLength = 0
		}
	}
	return maxLength
}

function statsSorter(data: MealDTO[]) {
	const registeredMeals = totalItens(data)

	const dietsMelsOrderByHour = dietMealsOrderedByTime(data)

	const bestSequenceOfDishesWithinTheDiet =
		longestTrueSequence(dietsMelsOrderByHour)

	const mealsOnTheDiet = totalMealsOnTheDiet(data)

	const mealsOutOnDiet = totalMealsOutOnTheDiet(data)

	const percentage = calculatePercentage(
		mealsOnTheDiet,
		mealsOutOnDiet,
		registeredMeals,
	)

	return {
		percentage: `${percentage}%`,
		bestSequenceOfDishesWithinTheDiet:
			bestSequenceOfDishesWithinTheDiet.toString(),
		registeredMeals: registeredMeals.toString(),
		mealsOnTheDiet: mealsOnTheDiet.toString(),
		mealsOutOnDiet: mealsOutOnDiet.toString(),
	}
}

export { statsSorter }
