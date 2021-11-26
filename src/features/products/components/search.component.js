import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchContainer = styled(View)`
	padding-top: ${(props) => props.theme.space[5]};
	padding-left: ${(props) => props.theme.space[3]};
	padding-right: ${(props) => props.theme.space[3]};
`;

const SearchbarInput = styled(Searchbar).attrs({
	placeholder: "Search for a product",
})`
	border-radius: 20px;
	background-color: white;
	shadow-radius: 20px;
	shadow-color: green;
`;

export const Search = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	return (
		<SearchContainer>
			<SearchbarInput
				value={searchKeyword}
				onChangeText={(text) => setSearchKeyword(text)}
			/>

			<Text>{searchKeyword}</Text>
		</SearchContainer>
	);
};
