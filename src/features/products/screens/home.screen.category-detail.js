import React from "react";
import { Text } from "../../../components/typography/text.component";
import { HomeContainer } from "./home.screen.styles";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";
import { View, ScrollView } from "react-native";

const Container = styled(View)`
	padding: 20px;
`;

export const CategoryDetail = () => {
	return (
		<HomeContainer>
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Card style={{ borderRadius: 10, marginBottom: 10 }}>
						<Card.Cover source={{ uri: "https://picsum.photos/600" }} />
						<Card.Content>
							<Title>Card title</Title>
						</Card.Content>
						<Card.Actions>
							<Button>Cancel</Button>
							<Button>Ok</Button>
						</Card.Actions>
					</Card>
					<Card style={{ borderRadius: 10, marginBottom: 10 }}>
						<Card.Cover source={{ uri: "https://picsum.photos/701" }} />
						<Card.Content>
							<Title>Card title</Title>
						</Card.Content>
						<Card.Actions>
							<Button>Cancel</Button>
							<Button>Ok</Button>
						</Card.Actions>
					</Card>
					<Card style={{ borderRadius: 10, marginBottom: 10 }}>
						<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
						<Card.Content>
							<Title>Card title</Title>
						</Card.Content>
						<Card.Actions>
							<Button>Cancel</Button>
							<Button>Ok</Button>
						</Card.Actions>
					</Card>
				</ScrollView>
			</Container>
		</HomeContainer>
	);
};
