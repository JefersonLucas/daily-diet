import styled from 'styled-components/native'
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'
import { CardColor, TextSize } from '.'

export const Container = styled.View<CardColor>`
	width: 100%;
	height: 102px;

	align-items: center;
	justify-content: center;

	border-radius: 8px;
	padding: 16px;

	position: relative;

	background-color: ${({ theme, bg }) => {
		const { colors } = theme

		if (bg === 'gray') return colors.base.gray_6
		if (bg === 'green') return colors.brand.green_light
		if (bg === 'red') return colors.brand.red_light
		else return colors.base.gray_6
	}};
`

export const Title = styled.Text<TextSize>`
	font-size: ${({ theme, titleFontSize }) => {
		switch (titleFontSize) {
			case 'title_xs':
				return theme.font_size.title.xs
			case 'title_sm':
				return theme.font_size.title.sm
			case 'title_md':
				return theme.font_size.title.md
			case 'title_lg':
				return theme.font_size.title.lg
			default:
				return theme.font_size.title.md
		}
	}}px;
	font-family: ${({ theme }) => theme.font_family.bold};
	color: ${({ theme }) => theme.colors.base.gray_1};
`

export const ButtonToStaticLeft = styled.TouchableOpacity`
	position: absolute;
	top: 8px;
	left: 8px;
`

export const ButtonToStaticRight = styled.TouchableOpacity`
	position: absolute;
	top: 8px;
	right: 8px;
`

export const IconArrowUpRight = styled(ArrowUpRight).attrs<CardColor>(
	({ theme, bg }) => ({
		size: 24,
		color:
			bg === 'green'
				? theme.colors.brand.green_dark
				: bg === 'red'
				? theme.colors.brand.red_dark
				: theme.colors.base.gray_1,
	}),
)<CardColor>``

export const IconArrowLeft = styled(ArrowLeft).attrs<CardColor>(
	({ theme, bg }) => ({
		size: 24,
		color:
			bg === 'green'
				? theme.colors.brand.green_dark
				: bg === 'red'
				? theme.colors.brand.red_dark
				: theme.colors.base.gray_1,
	}),
)<CardColor>``
