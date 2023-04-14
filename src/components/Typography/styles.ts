import styled from 'styled-components/native'
import { TypographyStyle } from '.'

export const Container = styled.Text<TypographyStyle>`
	/* Font Size */
	font-size: ${({ theme, fontSize }) => {
		if (fontSize === 'body_xs') return theme.font_size.body.xs
		if (fontSize === 'body_sm') return theme.font_size.body.sm
		if (fontSize === 'body_md') return theme.font_size.body.md
		if (fontSize === 'title_xs') return theme.font_size.title.xs
		if (fontSize === 'title_sm') return theme.font_size.title.sm
		if (fontSize === 'title_md') return theme.font_size.title.md
		if (fontSize === 'title_lg') return theme.font_size.title.lg
		else return theme.font_size.body.md
	}}px;

	/* Line Height */
	line-height: ${({ theme, lineHeight }) => {
		const { line_height } = theme

		return line_height[lineHeight!] ?? line_height.md
	}}px;

	/* Font Family */
	font-family: ${({ theme, family }) => {
		return family === 'bold'
			? theme.font_family.bold
			: theme.font_family.regular
	}};

	/* Color */
	color: ${({ theme, color }) => {
		const { colors } = theme

		if (color === 'gray_1') return colors.base.gray_1
		if (color === 'gray_2') return colors.base.gray_2
		if (color === 'gray_3') return colors.base.gray_3
		if (color === 'gray_4') return colors.base.gray_4
		if (color === 'gray_5') return colors.base.gray_5
		if (color === 'gray_6') return colors.base.gray_6
		if (color === 'gray_7') return colors.base.gray_7
		if (color === 'green_dark') return colors.brand.green_dark
		if (color === 'green_light') return colors.brand.green_light
		if (color === 'green_mid') return colors.brand.green_mid
		if (color === 'red_dark') return colors.brand.red_dark
		if (color === 'red_light') return colors.brand.red_light
		if (color === 'red_mid') return colors.brand.red_mid
		if (color === 'white') return colors.base.white
		else return colors.base.gray_1
	}};

	text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
`
