import { TouchableOpacityProps } from 'react-native'

import { Typography } from '@components/Typography'

import { Container } from './styles'

export type ButtonType = { type?: 'solid' | 'outline'; isActive?: boolean }

type ButtonProps = TouchableOpacityProps &
	ButtonType & {
		icon?: React.ReactNode
		title: string
	}

export function Button({
	type = 'solid',
	isActive = true,
	...props
}: ButtonProps) {
	return (
		<Container
			type={type}
			isActive={isActive}
			disabled={isActive ? false : true}
			{...props}
		>
			{props.icon && props.icon}

			<Typography
				color={type === 'solid' ? 'white' : 'gray_1'}
				family="bold"
				style={{ marginHorizontal: 12 }}
			>
				{props.title}
			</Typography>
		</Container>
	)
}
