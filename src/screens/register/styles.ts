import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.base.gray_5};
`

export const Row = styled.View`
	margin: 12px;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Form = styled.ScrollView.attrs(() => ({
	showsVerticalScrollIndicator: false,
}))`
	flex: 1;
	width: 100%;
	margin-bottom: 20px;
`
