import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import the FloatingAction component from the package
import { FloatingAction } from 'react-native-floating-action';

// import card component
import Card from '../components/Card';

const HomeListScreen = (props) => {
	return (
		<View style={styles.container}>
			<Card navigation={props.navigation} />

			<FloatingAction
				position="right"
				animated={false}
				showBackground={false}
				onPressMain={() => props.navigation.navigate('AddHome')}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeListScreen;
