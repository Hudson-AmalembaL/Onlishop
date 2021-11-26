import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { HomeContainer } from "./home.screen.styles";
import { Ionicons } from "@expo/vector-icons";
import { View, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";

const CategoriesWrapper = styled(View)`
    padding: ${(props) => props.theme.space[3]}
    flex: 1;
    `;

const CategoriesContainer = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const CategoryCard = styled(View)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	width: 150px;
	height: 150px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	margin: 5px;
`;

const Categories = () => {
	return (
		<CategoriesWrapper>
			<Spacer size="large" position="bottom">
				<Text variant="caption" style={{ fontSize: 20 }}>
					Categories{" "}
				</Text>
			</Spacer>
			<CategoriesContainer>
				<CategoryCard>
					<Ionicons name="md-checkmark-circle" size={32} color="green" />
				</CategoryCard>
				<CategoryCard>
					<Ionicons name="md-checkmark-circle" size={32} color="green" />
				</CategoryCard>
				<CategoryCard>
					<Ionicons name="md-checkmark-circle" size={32} color="green" />
				</CategoryCard>
				<CategoryCard>
					<Ionicons name="md-checkmark-circle" size={32} color="green" />
				</CategoryCard>
				<CategoryCard>
					<Ionicons name="md-checkmark-circle" size={32} color="green" />
				</CategoryCard>
				<CategoryCard>
					<Ionicons name="md-checkmark-circle" size={32} color="green" />
				</CategoryCard>
			</CategoriesContainer>
		</CategoriesWrapper>
	);
};
export const HomeScreen = () => {
	return (
		<SafeArea>
			<HomeContainer>
				<Search />
				<Categories />
			</HomeContainer>
		</SafeArea>
	);
};
