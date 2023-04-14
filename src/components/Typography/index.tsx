import { TextProps } from 'react-native'

import * as StylesDTO from '@dtos/StylesDTO'

import { Container } from './styles'

export type TypographyStyle = {
	fontSize?: StylesDTO.FontSize
	family?: StylesDTO.Family
	lineHeight?: StylesDTO.LineHeight
	color?: StylesDTO.Color
	textAlign?: StylesDTO.TextAlign
}

type TypographyProps = TextProps & TypographyStyle & {}

export function Typography({ ...props }: TypographyProps) {
	return <Container {...props}>{props.children}</Container>
}
