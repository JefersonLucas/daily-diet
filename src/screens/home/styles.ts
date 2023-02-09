import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.base.white};
	align-items: center;
	justify-content: center;
`

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font_family.bold};
	font-size: ${({ theme }) => theme.font_size.title.lg}px;
`
