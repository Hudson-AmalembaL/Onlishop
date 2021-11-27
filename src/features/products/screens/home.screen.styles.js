import { View, ScrollView } from "react-native";
import styled from "styled-components";

export const HomeSpacer = styled(View)`
	margin-top: ${(props) => props.theme.space[5]};
`;

export const HomeContainer = styled(View)`
	flex: 1;
	background-color: #eeffee77;
`;

export const CategoriesWrapper = styled(View)`
    padding: ${(props) => props.theme.space[3]}
    flex: 1;
    `;

export const CategoriesContainer = styled(View)`
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
`;
// background-color: lightblue;

export const CategoryCard = styled(View)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	width: 100px;
	height: 100px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	margin: 5px;
`;

export const CategoryScrollView = styled(ScrollView).attrs({
	horizontal: true,
	contentContainerStyle: {
		paddingHorizontal: 0,
	},
	showsHorizontalScrollIndicator: false,
})``;
