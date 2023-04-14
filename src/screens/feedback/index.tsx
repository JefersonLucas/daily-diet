import { Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import illustrationHappy from '@assets/illustration-happy.png'
import illustrationSad from '@assets/illustration-sad.png'

import { Typography } from '@components/Typography'
import { Button } from '@components/Button'

import { Container } from './styles'

type RouteParams = { isOnTheDiet: boolean }

export function FeedbackScreen() {
	const navigation = useNavigation()
	const route = useRoute()

	const { isOnTheDiet } = route.params as RouteParams

	function handleBackToHome() {
		navigation.navigate('home')
	}

	return (
		<Container>
			{isOnTheDiet ? (
				<>
					<Typography
						fontSize="title_md"
						color="green_dark"
						family="bold"
						lineHeight="lg"
					>
						Continue assim!
					</Typography>

					<Typography
						textAlign="center"
						style={{
							marginTop: 8,
							marginBottom: 40,
						}}
					>
						Você continua{' '}
						<Typography family="bold">dentro da dieta.</Typography>{' '}
						Muito bem!
					</Typography>

					<Image source={illustrationHappy} />
				</>
			) : (
				<>
					<Typography
						fontSize="title_md"
						color="red_dark"
						family="bold"
						lineHeight="lg"
					>
						Que pena!
					</Typography>

					<Typography
						textAlign="center"
						style={{
							marginTop: 8,
							marginBottom: 40,
						}}
					>
						Você{' '}
						<Typography family="bold">saiu da dieta</Typography>{' '}
						dessa vez, mas continue se esforçando e não desista!
					</Typography>

					<Image source={illustrationSad} />
				</>
			)}
			<Button
				title="Ir para a página inicial"
				onPress={handleBackToHome}
				style={{ marginTop: 32 }}
			/>
		</Container>
	)
}
