import { useState } from 'react'
import { SectionList, View } from 'react-native'
import { Plus } from 'phosphor-react-native'

import { Meal } from '@components/Meal'
import { Card } from '@components/Card'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Typography } from '@components/Typography'

import { Container } from './styles'

export function HomeScreen() {
	const [meals] = useState([
		{
			title: '12.08.22',
			data: [
				{
					id: '1',
					hour: '20:00',
					description: 'X-Tudo',
					isOnTheDiet: false,
				},
				{
					id: '2',
					hour: '16:00',
					description: 'Whey protein com leite',
					isOnTheDiet: true,
				},
			],
		},
		{
			title: '11.08.22',
			data: [
				{
					id: '3',
					hour: '20:00',
					description: 'X-Tudo',
					isOnTheDiet: false,
				},
				{
					id: '4',
					hour: '16:00',
					description: 'Whey protein com leite',
					isOnTheDiet: true,
				},
			],
		},
	])

	return (
		<Container>
			<Header />

			<Card
				title="90,86%"
				subtitle="das refeições dentro da dieta"
				bg="green"
			/>

			<View style={{ marginTop: 40 }}>
				<Typography fontSize="title_sm" style={{ marginBottom: 8 }}>
					Refeições
				</Typography>
				<Button
					title="Nova refeição"
					icon={<Plus color="white" size={18} />}
					activeOpacity={0.5}
				/>
			</View>

			<SectionList
				sections={meals}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Meal key={item.id} {...item} />}
				renderSectionHeader={({ section: { title } }) => (
					<Typography
						fontSize="title_sm"
						family="bold"
						color="gray_1"
						style={{ marginBottom: 8, marginTop: 32 }}
					>
						{title}
					</Typography>
				)}
				style={{ marginBottom: 32 }}
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
