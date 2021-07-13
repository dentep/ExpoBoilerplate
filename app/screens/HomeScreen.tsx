import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { AppText } from "../components/Text";
import Screen from "../components/Screen";

type Props = BottomTabScreenProps<BottomTabParamList, "Home">;

export default function FavouritesScreen({ route, navigation }: Props) {
	return (
		<Screen style={styles.container}>
			<AppText>Welcome to Home Screen!</AppText>
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
