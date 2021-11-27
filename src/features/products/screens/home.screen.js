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

const Categories = () => {
	return (
		<CategoriesWrapper>
			<Spacer size="large" position="bottom">
				<Text variant="caption" style={{ fontSize: 20 }}>
					Categories
				</Text>
			</Spacer>
			<CategoriesContainer>
				<CategoryScrollView>
					<CategoryCard>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
						<Text>All</Text>
					</CategoryCard>
					<CategoryCard>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
						<Text>Electronics</Text>
					</CategoryCard>
					<CategoryCard>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
						<Text>Clothing</Text>
					</CategoryCard>
					<CategoryCard>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
						<Text>Cars</Text>
					</CategoryCard>
					<CategoryCard>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
						<Text>Foods</Text>
					</CategoryCard>
					<CategoryCard>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
						<Text>Drinks</Text>
					</CategoryCard>
				</CategoryScrollView>
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
