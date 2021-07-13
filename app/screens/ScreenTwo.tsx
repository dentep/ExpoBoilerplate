import * as React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../types";
import { AppText } from "../components/Text";
import BackButton from "../components/BackButton";
import Screen from "../components/Screen";

type ScreenNavigationProp = StackNavigationProp<StackParamList, "ScreenTwo">;
type Props = {
	navigation: ScreenNavigationProp;
};

export default function BreedsScreen({ navigation }: Props) {
	return (
		<Screen style={styles.container}>
			<BackButton
				style={{ left: 10 }}
				onPress={() => navigation.goBack()}
			/>
			<View style={styles.titleBox}>
				<AppText>Welcome to Screen Two!</AppText>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
