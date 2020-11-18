import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

// import the FloatingAction component from the package
import { FloatingAction } from 'react-native-floating-action';

// useDispatch to use the dispatch from action
import { useDispatch, useSelector } from 'react-redux';

// import card component
import Card from '../components/Card';

// import all actions from houseAction
import * as houseACtion from '../redux/actions/houseAction';

const HomeListScreen = (props) => {
	// init useDispatch
	const dispatch = useDispatch();

	// this contains the array of data
	const { houses } = useSelector((state) => state.house);

	// dispatch action when components renders so we need useEffect
	useEffect(() => {
		dispatch(houseACtion.fetchHouses());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			{/* render card with data in FlatList */}
			<FlatList
				data={houses}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<Card
						navigation={props.navigation}
						title={item.title}
						address={item.address}
						homeType={item.homeType}
						description={item.description}
						price={item.price}
						image={item.image}
						yearBuilt={item.yearBuilt}
					/>
				)}
			/>

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
