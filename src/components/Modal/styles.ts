import styled from 'styled-components/native'

export const Container = styled.Modal``

export const Centered = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const ModalView = styled.View`
	width: 327px;

	align-items: center;

	border-radius: 8px;

	padding: 35px 24px;

	background-color: ${({ theme }) => theme.colors.base.white};
`

export const Row = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 32px;
`
