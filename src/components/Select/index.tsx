import { PressableProps } from 'react-native'
import { Typography } from '@components/Typography'
import { Container, Status } from './styles'

export type SelectStyle = {
	isSelected?: boolean
	bg: 'green' | 'red'
}

type SelectProps = PressableProps &
	SelectStyle & {
		title: string
	}

export function Select({ ...props }: SelectProps) {
	return (
		<Container {...props}>
			<Status bg={props.bg} isSelected={props.isSelected} />
			<Typography fontSize="title_xs" family="bold">
				{props.title}
			</Typography>
		</Container>
	)
}
