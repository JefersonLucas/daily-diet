import styled from 'styled-components/native'

export const Container = styled.View`
	flex-direction: column;
	flex: 1;
`

export const TextInput = styled.TextInput`
	height: 50px;
	width: 100%;

	padding: 14px;

	align-items: flex-start;
	text-align: left;

	border-radius: 6px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.base.gray_5};
`
