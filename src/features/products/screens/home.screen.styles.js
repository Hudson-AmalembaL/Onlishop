import { View } from "react-native";
import styled from "styled-components";

export const HomeSpacer = styled(View)`
	margin-top: ${(props) => props.theme.space[5]};
`;

export const HomeContainer = styled(View)`
	flex: 1;
	background-color: #eeffee77;
`;

// padding: ${(props) => props.theme.space[3]};
// background-color: ${(props) => props.theme.colors.bg.secondary};
