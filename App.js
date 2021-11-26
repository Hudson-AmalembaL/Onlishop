import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./src/infrastracture/theme";
import { Navigation } from "./src/infrastracture/navigation";

const AppContainer = styled(View)`
	flex: 1;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const WelcomeText = styled(Text)`
	font-size: ${(props) => props.theme.sizes[1]};
	color: blue;
`;

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<AppContainer>
					<Navigation />
					<StatusBar style="auto" />
				</AppContainer>
			</ThemeProvider>
		</>
	);
}
