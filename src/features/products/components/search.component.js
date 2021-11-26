import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const SearchbarInput = styled(Searchbar).attrs({
	placeholder: "Search product",
})``;

export const Search = () => {
	return (
		<SearchContainer>
			<SearchbarInput />
		</SearchContainer>
	);
};
