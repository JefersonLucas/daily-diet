import { StatusBar } from 'react-native'
import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme'

import { Loading } from '@components/Loading'

import { HomeScreen } from '@screens/home'
import { StatisticScreen } from '@screens/statistic'

export default function App() {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	})

	return (
		<ThemeProvider theme={theme}>
			{fontsLoaded ? <StatisticScreen /> : <Loading />}
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
		</ThemeProvider>
	)
}
