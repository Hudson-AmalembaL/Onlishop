import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
	HomeContainer,
	CategoriesWrapper,
	CategoriesContainer,
	CategoryScrollView,
	CategoryCard,
} from "./home.screen.styles";
import { Pressable, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { createStackNavigator } from "@react-navigation/stack";
import { CategoryDetail } from "./home.screen.category-detail";
import { CategoriesList } from "./home.screen.categories";

const Categories = ({ navigation }) => {
	return (
		<HomeContainer>
			<CategoriesWrapper>
				<Spacer size="large" position="bottom">
					<Text variant="caption" style={{ fontSize: 20 }}>
						Categories
					</Text>
				</Spacer>
				<CategoriesContainer>
					<CategoryScrollView>
						<PressableCover
							onPress={() => navigation.navigate("Categorydetail")}
						>
							<CategoryCard>
								<Ionicons name="md-checkmark-circle" size={32} color="green" />
								<Text>All</Text>
							</CategoryCard>
						</PressableCover>
						<PressableCover
							onPress={() => navigation.navigate("Categorydetail")}
						>
							<CategoryCard>
								<Ionicons name="md-checkmark-circle" size={32} color="green" />
								<Text>Electronics</Text>
							</CategoryCard>
						</PressableCover>
						<PressableCover
							onPress={() => navigation.navigate("Categorydetail")}
						>
							<CategoryCard>
								<Ionicons name="md-checkmark-circle" size={32} color="green" />
								<Text>Clothing</Text>
							</CategoryCard>
						</PressableCover>
						<PressableCover
							onPress={() => navigation.navigate("Categorydetail")}
						>
							<CategoryCard>
								<Ionicons name="md-checkmark-circle" size={32} color="green" />
								<Text>Cars</Text>
							</CategoryCard>
						</PressableCover>
						<PressableCover
							onPress={() => navigation.navigate("Categorydetail")}
						>
							<CategoryCard>
								<Ionicons name="md-checkmark-circle" size={32} color="green" />
								<Text>Foods</Text>
							</CategoryCard>
						</PressableCover>
						<PressableCover>
							<CategoryCard>
								<Ionicons name="md-checkmark-circle" size={32} color="green" />
								<Text>Drinks</Text>
							</CategoryCard>
						</PressableCover>
					</CategoryScrollView>
				</CategoriesContainer>
			</CategoriesWrapper>
		</HomeContainer>
	);
};

const Stack = createStackNavigator();

const PressableCover = styled(TouchableOpacity)``;

export const HomeScreen = ({ navigation }) => {
	return (
		<SafeArea>
			<HomeContainer>
				<Search />
				<Stack.Navigator>
					<Stack.Screen
						name="categories"
						component={Categories}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Categorydetail"
						component={CategoryDetail}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</HomeContainer>
		</SafeArea>
	);
};
