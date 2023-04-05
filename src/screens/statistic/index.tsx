import { Card } from '@components/Card'
import { Typography } from '@components/Typography'
import { Layout } from '@components/Layout'
import { Container, Row } from './styles'

export function StatisticScreen() {
	return (
		<Container>
			<Layout
				bg="green"
				title={
					<Card
						title="90,86%"
						subtitle="das refeições dentro da dieta"
						bg="green"
						iconPosition="left"
					/>
				}
			>
				<Typography
					family="bold"
					fontSize="title_xs"
					style={{ marginBottom: 19 }}
				>
					Estatísticas gerais
				</Typography>

				<Row>
					<Card
						title="22"
						subtitle="melhor sequência de pratos dentro da dieta"
						bg="gray"
						showIconButton={false}
					/>
				</Row>

				<Row>
					<Card
						title="109"
						subtitle="refeições registradas"
						bg="gray"
						showIconButton={false}
					/>
				</Row>

				<Row>
					<Card
						title="99"
						subtitle="refeições dentro da dieta"
						bg="green"
						showIconButton={false}
						style={{ width: '48%' }}
					/>

					<Card
						title="10"
						subtitle="refeições fora da dieta"
						bg="red"
						showIconButton={false}
						style={{ width: '48%' }}
					/>
				</Row>
			</Layout>
		</Container>
	)
}
