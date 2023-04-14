import { useState, useCallback } from 'react'
import { SectionList, View } from 'react-native'
import { Plus } from 'phosphor-react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Meal } from '@components/Meal'
import { Card } from '@components/Card'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Typography } from '@components/Typography'

import { mealsGetAll } from '@storage/meal/mealGetAll'

import { MealDTO } from '@dtos/MealDTO'

import { statsSorter } from '@utils/statistics'
import { mealsList } from '@utils/lists'

import { Container } from './styles'

type Meals = {
	date: string
	data: MealDTO[]
}

type Statistic = {
	percentage: string
	isMealsOnTheDiet: boolean
}

export function HomeScreen() {
	const [meals, setMeals] = useState<Meals[]>([])
	const [statistic, setStatistic] = useState<Statistic>()

	const navigation = useNavigation()

	function handleGoStatistic() {
		navigation.navigate('statistic')
	}

	function handleGoRegisterNewMeal() {
		navigation.navigate('register')
	}

	function handleGoMeal(id: string) {
		navigation.navigate('meal', { id })
	}

	async function fetchMeals() {
		try {
			const data = await mealsGetAll()

			// fetching sorted meals
			const meals = mealsList(data)

			const { percentage, mealsOnTheDiet, mealsOutOnDiet } =
				statsSorter(data)

			const isMealsOnTheDiet =
				mealsOnTheDiet >= mealsOutOnDiet ? true : false

			const statistics = {
				percentage,
				isMealsOnTheDiet,
			}

			// Updating the state
			setStatistic(statistics)

			setMeals(meals)
		} catch (error) {
			console.log(error)
		}
	}

	// when it has focus on the screen
	useFocusEffect(
		// executes the fetchMeals function
		useCallback(() => {
			fetchMeals()
		}, []),
	)

	return (
		<Container>
			<Header />

			{statistic && (
				<Card
					title={statistic.percentage}
					subtitle={`das refeições ${
						statistic.isMealsOnTheDiet ? 'dentro' : 'fora'
					} da dieta`}
					bg={statistic.isMealsOnTheDiet ? 'green' : 'red'}
					onPress={handleGoStatistic}
				/>
			)}

			<View style={{ marginTop: 40 }}>
				<Typography fontSize="title_sm" style={{ marginBottom: 8 }}>
					Refeições
				</Typography>
				<Button
					title="Nova refeição"
					icon={<Plus color="white" size={18} />}
					activeOpacity={0.5}
					onPress={handleGoRegisterNewMeal}
				/>
			</View>

			<SectionList
				sections={meals}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Meal
						key={item.id}
						onPress={() => handleGoMeal(item.id)}
						{...item}
					/>
				)}
				renderSectionHeader={({ section: { date } }) => (
					<Typography
						fontSize="title_sm"
						family="bold"
						color="gray_1"
						style={{ marginBottom: 8, marginTop: 32 }}
					>
						{date}
					</Typography>
				)}
				style={{ marginVertical: 32 }}
				contentContainerStyle={
					meals.length === 0 && {
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}
				}
				ListEmptyComponent={() => (
					<>
						<Typography>
							Não há refeições cadastradas ainda.
						</Typography>
						<Typography>Vamos cadastrar refeições hoje?</Typography>
					</>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	)
}
