import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../types";
import { RouteProp } from "@react-navigation/native";
import AppButton from "../components/Button";
import { AppText } from "../components/Text";
import Screen from "../components/Screen";

type ScreenNavigationProp = StackNavigationProp<StackParamList, "ScreenOne">;
type ScreenRouteProp = RouteProp<StackParamList, "ScreenOne">;

type Props = {
	route: ScreenRouteProp;
	navigation: ScreenNavigationProp;
};

function BreedScreen({ route, navigation }: Props) {
	return (
		<Screen style={styles.container}>
			<AppText>Welcome to Screen One!</AppText>
			<AppButton
				label={`Go to Screen Two`}
				onPress={() => navigation.navigate("ScreenTwo")}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default BreedScreen;
