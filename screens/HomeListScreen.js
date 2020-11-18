import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import the FloatingAction component from the package
import { FloatingAction } from 'react-native-floating-action';

// useDispatch to use the dispatch from action
import { useDispatch } from 'react-redux';

// import card component
import Card from '../components/Card';

// import all actions from houseAction
import * as houseACtion from '../redux/actions/houseAction';

const HomeListScreen = (props) => {
	// init useDispatch
	const dispatch = useDispatch();

	// dispatch action when components renders so we need useEffect
	useEffect(() => {
		dispatch(houseACtion.fetchHouses());
	}, [dispatch]);

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
