import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.brand.green_light};
`

export const Row = styled.View`
	width: 100%;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	margin: 6px;
`
