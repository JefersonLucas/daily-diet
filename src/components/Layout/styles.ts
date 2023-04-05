import styled from 'styled-components/native'
import { LayoutColor } from '.'

export const Container = styled.View<LayoutColor>`
	flex: 1;
	background-color: ${({ theme, bg }) =>
		bg === 'green'
			? theme.colors.brand.green_light
			: bg === 'red'
			? theme.colors.brand.red_light
			: theme.colors.base.gray_5};
`

export const Header = styled.View`
	align-items: center;
	justify-content: space-between;
	flex-direction: row;

	padding: 50px 24px 20px;
`

export const Back = styled.TouchableOpacity``

export const Content = styled.View`
	flex: 1;
	align-items: center;

	padding: 40px 24px;

	background-color: ${({ theme }) => theme.colors.base.gray_7};

	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
`
