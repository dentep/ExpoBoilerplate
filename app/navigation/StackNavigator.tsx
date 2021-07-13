import React from "react";
import ScreenTwo from "../screens/ScreenTwo";
import ScreenOne from "../screens/ScreenOne";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "../types";
import colors from "../config/colors";

const Stack = createStackNavigator<StackParamList>();

const menuOptions = (title: string, headerShown: boolean = true) => {
	return {
		title: title,
		headerShown: headerShown,
		headerBackTitle: "",
		headerTruncatedBackTitle: "",
		headerBackTitleStyle: {
			color: colors.white,
			fontSize: 18,
		},
		headerTintColor: colors.white,
		headerTitleStyle: {
			color: colors.white,
			fontSize: 20,
		},
		headerStyle: {
			backgroundColor: colors.primary,
		},
	};
};

export default function StackNavigator() {
	return (
		<Stack.Navigator initialRouteName="ScreenOne">
			<Stack.Screen
				name="ScreenOne"
				component={ScreenOne}
				options={menuOptions("", false)}
			/>
			<Stack.Screen
				name="ScreenTwo"
				component={ScreenTwo}
				options={menuOptions("", false)}
			/>
		</Stack.Navigator>
	);
}
