import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
	HomeContainer,
	CategoriesWrapper,
	CategoriesContainer,
	CategoryScrollView,
	CategoryCard,
	PressableCover,
} from "./home.screen.styles";

export const CategoriesList = ({ navigation }) => {
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
// export const Categories = ({ navigation }) => {
// 	return (
// 		<HomeContainer>
// 			<CategoriesWrapper>
// 				<Spacer size="large" position="bottom">
// 					<Text variant="caption" style={{ fontSize: 20 }}>
// 						Categories
// 					</Text>
// 				</Spacer>
// 				<CategoriesContainer>
// 					<CategoryScrollView>
// 						<PressableCover
// 							onPress={() => navigation.navigate("Categorydetail")}
// 						>
// 							<CategoryCard>
// 								<Ionicons name="md-checkmark-circle" size={32} color="green" />
// 								<Text>All</Text>
// 							</CategoryCard>
// 						</PressableCover>
// 						<PressableCover
// 							onPress={() => navigation.navigate("Categorydetail")}
// 						>
// 							<CategoryCard>
// 								<Ionicons name="md-checkmark-circle" size={32} color="green" />
// 								<Text>Electronics</Text>
// 							</CategoryCard>
// 						</PressableCover>
// 						<PressableCover
// 							onPress={() => navigation.navigate("Categorydetail")}
// 						>
// 							<CategoryCard>
// 								<Ionicons name="md-checkmark-circle" size={32} color="green" />
// 								<Text>Clothing</Text>
// 							</CategoryCard>
// 						</PressableCover>
// 						<PressableCover
// 							onPress={() => navigation.navigate("Categorydetail")}
// 						>
// 							<CategoryCard>
// 								<Ionicons name="md-checkmark-circle" size={32} color="green" />
// 								<Text>Cars</Text>
// 							</CategoryCard>
// 						</PressableCover>
// 						<PressableCover
// 							onPress={() => navigation.navigate("Categorydetail")}
// 						>
// 							<CategoryCard>
// 								<Ionicons name="md-checkmark-circle" size={32} color="green" />
// 								<Text>Foods</Text>
// 							</CategoryCard>
// 						</PressableCover>
// 						<PressableCover>
// 							<CategoryCard>
// 								<Ionicons name="md-checkmark-circle" size={32} color="green" />
// 								<Text>Drinks</Text>
// 							</CategoryCard>
// 						</PressableCover>
// 					</CategoryScrollView>
// 				</CategoriesContainer>
// 			</CategoriesWrapper>
// 		</HomeContainer>
// 	);
// };
