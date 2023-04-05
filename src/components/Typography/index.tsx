import { TextProps } from 'react-native'

import * as StylesDTO from 'src/dtos/StylesDTO'

import { Container } from './styles'

export type TypographyStyle = {
	fontSize?: StylesDTO.FontSize
	family?: StylesDTO.Family
	lineHeight?: StylesDTO.LineHeight
	color?: StylesDTO.Color
}

type TypographyProps = TextProps & TypographyStyle & {}

export function Typography({ ...props }: TypographyProps) {
	return <Container {...props}>{props.children}</Container>
}
