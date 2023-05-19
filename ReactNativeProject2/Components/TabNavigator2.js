import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useRoute, getFocusedRouteNameFromRoute} from "@react-navigation/native";
import { tabIconsColor, orangeAccent, whiteContrastColor } from './Constants';
import PostsView from '../Screens/PostsScreen';
import CreatePostsView from '../Screens/CreatePostsScreen';
import ProfileView from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: { paddingLeft: "20%", paddingRight: "20%", height: 60 },
				tabBarActiveTintColor: orangeAccent,
				tabBarInactiveTintColor: tabIconsColor,
			}}
		>
			<Tab.Screen
				screenOptions={{ borderTopWidth: 1 }}
				options={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Feather name="grid" size={24} color={color} />
                    ),
                    tabBarIconStyle: {marginLeft: 12},
                    tabBarItemStyle: {alignItems: "flex-start"}, 
					tabBarStyle: ((route) => {
						const routeName = getFocusedRouteNameFromRoute(route) ?? "";
						if (routeName === "Comments") {
							return { display: "none" };
						}
						return { height: 60, paddingLeft: "20%", paddingRight: "20%", };
					})(route),
				})}
				name="Posts"
				component={PostsView}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<View
							style={{
								...style.btnCont,
								backgroundColor: orangeAccent,
								borderColor: "transparent",
							}}
						>
							<Feather
								name="plus"
								style={{
									...style.addBtnText,
									color: whiteContrastColor,
								}}
							/>
						</View>
					),
				}}
				name="CreatePosts"
				component={CreatePostsView}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Feather name="user" size={size} color={color} />
                  ),
                tabBarIconStyle: {marginRight: 12},
                tabBarItemStyle: {alignItems: "flex-end"},  
				}}
				name="Profile"
				component={ProfileView}
			/>
		</Tab.Navigator>
  );
}

const style = StyleSheet.create({
	btnCont: {
		alignItems: "center",
		justifyContent: "center",
		width: 70,
		height: 40,
		borderRadius: 20,
        borderWidth: 1,
        border: 0,
	},
	addBtnText: {
		fontSize: 25,
		fontWeight: "100",
	},
});