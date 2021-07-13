import { StatusBar } from "expo-status-bar";
import React from "react";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigator />
			<OfflineNotice />
			<StatusBar style="auto" />
			<FlashMessage />
		</NavigationContainer>
	);
}
