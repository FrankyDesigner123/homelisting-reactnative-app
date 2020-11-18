import React from 'react';
// import all the navigation components from react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import all the screens we need in navigation
import AboutScreen from '../screens/AboutScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';
import HomeListScreen from '../screens/HomeListScreen';

// init Stack and Tab components from react-navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// define function StackNavigator
function stackNavigator() {
	return (
		// Set up Stack.Navigator
		<Stack.Navigator>
			<Stack.Screen // we define the required screens. We use Stack.Screen because its nested
				name="HomeList"
				component={HomeListScreen}
				options={{ title: 'Find Homes' }} // title on header that react-navigation generates
			/>
			<Stack.Screen
				name="HomeDetails"
				component={HomeDetailsScreen}
				options={{ title: 'Home Details' }}
			/>
			<Stack.Screen
				name="AddHome"
				component={AddHomeScreen}
				options={{ title: 'Add Home' }}
			/>
		</Stack.Navigator>
	);
}

// create AboutScreen as StackNavigator. If we use this AboutStack we can set the Navigation Title for this screen.
function AboutStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="About"
				component={AboutScreen}
				options={{ title: 'About' }}
			/>
		</Stack.Navigator>
	);
}

// define function AppNavigator where we use Tab.Navigator
function AppNavigator() {
	return (
		// Wrap NavigationContainer because its the root of the app
		<NavigationContainer>
			{/* Set up Tab.Navigator */}
			<Tab.Navigator>
				{/* Setting up screens in Tab.Navigator*/}
				<Tab.Screen name="Home" component={stackNavigator} />
				<Tab.Screen name="About" component={AboutStackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

// export AppNavigator so we can import it in App.js
export default AppNavigator;
