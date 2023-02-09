import { StatusBar } from 'expo-status-bar'
import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { HomeScreen } from '@screens/home'
import { Loading } from '@components/Loading'
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme'

export default function App() {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	})

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			{fontsLoaded ? <HomeScreen /> : <Loading />}
		</ThemeProvider>
	)
}
