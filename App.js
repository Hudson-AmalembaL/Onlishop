import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastracture/theme";

import styled from "styled-components";

const AppContainer = styled(View)`
	flex: 1;
	justify-content: center;
	background-color: "#fff";
	align-items: "center";
	justify-content: "center";
`;

const WelcomeText = styled(Text)`
	font-size: 40px;
	color: blue;
`;

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<AppContainer>
					<WelcomeText>This is going to be a fun project!</WelcomeText>
					<StatusBar style="auto" />
				</AppContainer>
			</ThemeProvider>
		</>
	);
}
