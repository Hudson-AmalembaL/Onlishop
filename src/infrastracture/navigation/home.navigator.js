import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../features/products/screens/home.screen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
