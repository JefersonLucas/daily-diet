import { Typography } from '@components/Typography'
import { Container, Divider, Status } from './styles'

export type MealStatus = { isOnTheDiet: boolean }

type MealProps = MealStatus & { hour: string; description: string }

export function Meal({ ...props }: MealProps) {
	return (
		<Container>
			<Typography fontSize="body_xs" family="bold">
				{props.hour}
			</Typography>
			<Divider />
			<Typography style={{ flex: 1 }} numberOfLines={1}>
				{props.description}
			</Typography>
			<Status isOnTheDiet={props.isOnTheDiet} />
		</Container>
	)
}
