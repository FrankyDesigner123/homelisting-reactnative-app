import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import the FloatingAction component from the package
import { FloatingAction } from 'react-native-floating-action';

// import card component
import Card from '../components/Card';

const HomeListScreen = () => {
	return (
		<View style={styles.container}>
			<Card />

			<FloatingAction
				position="right"
				animated={false}
				showBackground={false}
				onPressMain={() => console.log('button is pressed.')}
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
