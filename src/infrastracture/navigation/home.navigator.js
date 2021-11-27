import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../features/products/screens/home.screen";

const Stack = createStackNavigator();

const CategoryScreen = () => {
	return (
		<View>
			<Text>Category Screen</Text>
		</View>
	);
};

export const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Category" component={CategoryScreen} />
		</Stack.Navigator>
	);
};
