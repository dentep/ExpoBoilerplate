import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import StackNavigator from "./StackNavigator";
import HomeScreen from "../screens/HomeScreen";

const Tabs = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: { name: any; focused: boolean; size: any }) {
	const { focused } = props;
	return (
		<View
			style={{
				backgroundColor: focused ? colors.primaryLight : "transparent",
				borderRadius: 20,
				padding: 8,
			}}
		>
			<Icon {...props} color={focused ? colors.primary : colors.medium} />
		</View>
	);
}

export default function BottomTabNavigator() {
	return (
		<Tabs.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveTintColor: colors.medium,
				showLabel: false,
				style: styles.tabbar,
			}}
		>
			<Tabs.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							size={25}
							focused={focused}
							name="alpha-a-circle"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="StackNavigator"
				component={StackNavigator}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							size={25}
							focused={focused}
							name="alpha-b-circle"
						/>
					),
				}}
			/>
		</Tabs.Navigator>
	);
}

const styles = StyleSheet.create({
	tabbar: {
		borderTopLeftRadius: 21,
		borderTopRightRadius: 21,
		backgroundColor: colors.tabBackground,
		position: "absolute",
		bottom: 0,
		padding: 10,
		width: "100%",
		minHeight: 100,
		zIndex: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
});
