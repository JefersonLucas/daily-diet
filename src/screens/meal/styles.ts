import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MealBackground, MealStatus } from '.'

export const Container = styled(SafeAreaView)<MealBackground>`
	flex: 1;
	background-color: ${({ theme, bg }) =>
		bg === 'green'
			? theme.colors.brand.green_light
			: theme.colors.brand.red_light};
`

export const Content = styled.View`
	flex: 1;
	width: 100%;
`

export const Row = styled.View`
	margin-bottom: 24px;
`

export const Tag = styled.View`
	width: 150px;

	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 50px;

	padding: 8px 16px;

	background-color: ${({ theme }) => theme.colors.base.gray_6};
`

export const Status = styled.View<MealStatus>`
	width: 8px;
	height: 8px;

	margin-right: 8px;

	border-radius: 8px;

	background-color: ${({ theme, isOnTheDiet }) =>
		isOnTheDiet
			? theme.colors.brand.green_dark
			: theme.colors.brand.red_dark};
`
