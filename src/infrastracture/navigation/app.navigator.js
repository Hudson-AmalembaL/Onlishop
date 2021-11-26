import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Home: "md-home",
	Favourites: "heart-outline",
	Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: "blue",
		tabBarInactiveTintColor: "gray",
		tabBarStyle: [
			{
				display: "flex",
			},
			null,
		],
	};
};

const Settings = () => <Text> Settings </Text>;

const Follow = () => <Text>Follow</Text>;
const Me = () => <Text>Me</Text>;
const Favourites = () => <Text>Favourites</Text>;

export const AppNavigator = () => {
	return (
		<Tab.Navigator screenOptions={createScreenOptions}>
			<Tab.Screen
				name="Home"
				component={HomeNavigator}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Favourites"
				component={Favourites}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};
