import styled from 'styled-components/native'
import { SelectStyle } from '.'

export const Container = styled.Pressable<SelectStyle>`
	width: 100%;
	height: 50px;

	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 6px;
	border-width: 1px;
	border-color: ${({ theme, bg, isSelected }) => {
		return isSelected
			? bg === 'green'
				? theme.colors.brand.green_dark
				: theme.colors.brand.red_dark
			: theme.colors.base.gray_6
	}};

	background-color: ${({ theme, bg, isSelected }) => {
		return isSelected
			? bg === 'green'
				? theme.colors.brand.green_light
				: theme.colors.brand.red_light
			: theme.colors.base.gray_6
	}};
`

export const Status = styled.View<SelectStyle>`
	width: 8px;
	height: 8px;

	margin-right: 6px;

	border-radius: 8px;

	background-color: ${({ theme, bg }) =>
		bg === 'green'
			? theme.colors.brand.green_dark
			: theme.colors.brand.red_dark};
`
