export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined
			statistic: undefined
			register: undefined
			feedback: { isOnTheDiet: boolean }
			meal: { id: string }
			update: { id: string }
		}
	}
}
