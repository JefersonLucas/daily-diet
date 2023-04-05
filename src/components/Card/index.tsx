import * as S from './styles'
import { FontSizeTitle } from 'src/dtos/StylesDTO'
import { Typography } from '@components/Typography'
import { ViewProps } from 'react-native'

export type CardColor = { bg?: 'gray' | 'green' | 'red' }
export type TextSize = { titleFontSize?: FontSizeTitle }
export type ButtonFloat = { iconPosition?: 'left' | 'right' }

type CardProps = ViewProps &
	CardColor &
	TextSize &
	ButtonFloat & {
		title: string
		subtitle: string
		showIconButton?: boolean
		onPress?: () => void
	}

export function Card({
	bg = 'gray',
	iconPosition = 'right',
	titleFontSize = 'title_lg',
	showIconButton = true,
	...props
}: CardProps) {
	return (
		<S.Container bg={bg} {...props}>
			{showIconButton &&
				(iconPosition === 'left' ? (
					<S.ButtonToStaticLeft onPress={props.onPress}>
						<S.IconArrowLeft bg={bg} />
					</S.ButtonToStaticLeft>
				) : (
					<S.ButtonToStaticRight onPress={props.onPress}>
						<S.IconArrowUpRight bg={bg} />
					</S.ButtonToStaticRight>
				))}
			<S.Title titleFontSize={titleFontSize}>{props.title}</S.Title>
			<Typography
				color="gray_2"
				fontSize="body_sm"
				style={{ textAlign: 'center' }}
			>
				{props.subtitle}
			</Typography>
		</S.Container>
	)
}
