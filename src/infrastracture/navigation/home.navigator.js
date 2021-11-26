import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const Stack = createStackNavigator();

const Splash = () => <Text>Splash Screen </Text>;

export const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Splash" component={Splash} />
		</Stack.Navigator>
	);
};
