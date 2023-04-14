import styled from 'styled-components/native'
import { ButtonType } from '.'

export const Container = styled.TouchableOpacity<ButtonType>`
	width: 100%;
	height: 50px;

	align-items: center;
	justify-content: center;
	flex-direction: row;

	padding: 16px 0;

	border-radius: 6px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.base.gray_1};

	background-color: ${({ theme, type, isActive }) => {
		if (type === 'solid') {
			return isActive
				? theme.colors.base.gray_1
				: theme.colors.base.gray_2
		}

		if (type === 'outline') {
			return isActive ? theme.colors.base.white : theme.colors.base.gray_5
		}
	}};
`
