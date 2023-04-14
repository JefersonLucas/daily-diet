import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
	color: theme.colors.base.gray_1,
	size: theme.font_size.title.lg,
}))``
