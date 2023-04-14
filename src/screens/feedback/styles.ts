import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
	flex: 1;
	width: 100%;

	align-items: center;
	justify-content: center;

	padding: 0 24px;

	background-color: ${({ theme }) => theme.colors.base.gray_7};
`
