import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { HomeSpacer, HomeContainer } from "./home.screen.styles";
import { View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";

const CategoriesWrapper = styled(View)`
    padding: ${(props) => props.theme.space[3]}
    flex: 1;
`;
const CategoriesContainer = styled(View)`
	flex: 1;
	padding: ${(props) => props.theme.space[2]};
`;
// background-color: #eeff;

const Categories = () => {
	return (
		<CategoriesWrapper>
			<CategoriesContainer>
				<Text variant="caption">Categories </Text>
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
