import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from '@react-navigation/native'

import { Layout } from '@components/Layout'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Select } from '@components/Select'
import { Typography } from '@components/Typography'

import { Container, Form, Row } from './styles'
import { mealsGetAll } from '@storage/meal/mealGetAll'
import { mealUpdate } from '@storage/meal/mealUpdate'

type RouteParams = { id: string }

export function UpdateScreen() {
	const route = useRoute()
	const { id } = route.params as RouteParams

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [date, setDate] = useState('')
	const [hour, setHour] = useState('')
	const [isOnTheDiet, setIsOnTheDiet] = useState(true)

	const navigation = useNavigation()

	function handleBackToMeal() {
		navigation.goBack()
	}

	const alertError = (message: string) =>
		Alert.alert('Editar refeição', message)

	async function handleReceiveMeal() {
		try {
			const data = await mealsGetAll()

			const meal = data.filter((item) => item.id === id)[0]

			setName(meal.name)
			setDescription(meal.description)
			setDate(meal.date)
			setHour(meal.hour)
			setIsOnTheDiet(meal.isOnTheDiet)
		} catch (error) {
			console.log(error)
		}
	}

	async function handleSubmit() {
		try {
			const newMeal = {
				id,
				name: name.trim(),
				description: description.trim(),
				date,
				hour,
				isOnTheDiet,
			}

			if (name.trim().length === 0) {
				return alertError('Informe o nome da refeição.')
			}

			if (description.trim().length === 0) {
				return alertError('Informe a descrição da refeição.')
			}

			if (date.trim().length === 0) {
				return alertError('Informe a data da refeição.')
			}

			if (date.length < 10) {
				return alertError('O formato da data não é válida.')
			}

			if (hour.trim().length === 0) {
				return alertError('Informe a hora da refeição.')
			}

			if (hour.length < 5) {
				return alertError('O formato da hora não é válido.')
			}

			// Updated meal
			await mealUpdate(id, newMeal)

			handleBackToMeal()
		} catch (error) {
			console.log(error)
		}
	}

	// when it has focus on the screen
	useFocusEffect(
		// executes the fetchMeals function
		useCallback(() => {
			handleReceiveMeal()
		}, []),
	)

	return (
		<Container>
			<Layout
				title="Editar refeição"
				bg="gray"
				onPressBack={handleBackToMeal}
			>
				<Form>
					<Row>
						<Input
							placeholder="Nome da refeição"
							label="Nome"
							value={name}
							onChangeText={(text: string) => setName(text)}
						/>
					</Row>

					<Row>
						<Input
							placeholder="Descrição da refeição"
							label="Descrição"
							value={description}
							onChangeText={(text: string) =>
								setDescription(text)
							}
						/>
					</Row>

					<Row>
						<Input
							label="Data"
							mask="date"
							placeholder="dd/mm/aaaa"
							keyboardType="numeric"
							value={date}
							onInputMaksChange={(text: string) => setDate(text)}
							style={{ width: '99%', marginRight: 4 }}
						/>

						<Input
							label="Hora"
							mask="hour"
							placeholder="HH:mm"
							keyboardType="numeric"
							value={hour}
							onInputMaksChange={(text: string) => setHour(text)}
							style={{ width: '99%', marginLeft: 4 }}
						/>
					</Row>

					<Row>
						<Typography fontSize="title_xs" family="bold">
							Está na dieta?
						</Typography>
					</Row>

					<Row style={{ marginTop: -4 }}>
						<Select
							title="Sim"
							bg="green"
							isSelected={isOnTheDiet}
							onPress={() => setIsOnTheDiet(true && true)}
							style={{ width: '48%' }}
						/>
						<Select
							title="Não"
							bg="red"
							isSelected={!isOnTheDiet}
							onPress={() => setIsOnTheDiet(false && false)}
							style={{ width: '48%' }}
						/>
					</Row>
				</Form>

				<Button
					title="Salvar alterações"
					activeOpacity={0.5}
					onPress={handleSubmit}
				/>
			</Layout>
		</Container>
	)
}
