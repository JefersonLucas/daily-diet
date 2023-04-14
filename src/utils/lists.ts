import { MealDTO } from '@dtos/MealDTO'

function searchingOnlyByDates(array: MealDTO[]) {
	return [...new Set(array.map(({ date }) => date))].sort()
}

function mealsSortedByDate(dates: string[], array: MealDTO[]) {
	return dates.map((item) => {
		return {
			// Adding the dates
			date: item,
			// Adding items that are from the same date
			data: array
				.filter(({ date }) => date === item)
				// Sorting by time
				.sort((a, b) => {
					if (a.hour > b.hour) {
						return 1
					}
					if (b.hour > a.hour) {
						return -1
					}
					return 0
				}),
		}
	})
}

function mealsList(array: MealDTO[]) {
	const dates = searchingOnlyByDates(array)

	const meals = mealsSortedByDate(dates, array)

	return meals
}

export { mealsList }
