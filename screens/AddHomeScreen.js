import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	Button,
	KeyboardAvoidingView,
	Keyboard,
} from 'react-native';

// import Formik
import { Form, Formik } from 'formik';

const AddHomeScreen = () => {
	return (
		<KeyboardAvoidingView
			behavior="padding"
			keyboardVerticalOffset={100}
			style={{ flex: 1 }}
		>
			<ScrollView>
				{/* formik form */}
				<Formik
					// these are mandotary props this values corresponds with the datainpit from the form
					initialValues={{
						title: '',
						image: '',
						homeType: '',
						price: '',
						yearBuilt: '',
						address: '',
						description: '',
					}}
					//
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{(props) => (
						<View style={styles.form}>
							<View style={styles.formGroup}>
								<Text style={styles.label}>Title:</Text>
								<TextInput
									style={styles.input}
									// handle the values change of the textInput (this is a prop from Formik)
									onChangeText={props.handleChange('title')}
									value={props.values.title}
								/>
							</View>

							<View style={styles.formGroup}>
								<Text style={styles.label}>Image URL:</Text>
								<TextInput
									style={styles.input}
									onChangeText={props.handleChange('image')}
									value={props.values.image}
								/>
							</View>

							<View style={styles.formGroup}>
								<Text style={styles.label}>HomeType:</Text>
								<TextInput
									style={styles.input}
									onChangeText={props.handleChange('homeType')}
									value={props.values.homeType}
								/>
							</View>

							<View style={styles.formGroup}>
								<Text style={styles.label}>Price:</Text>
								<TextInput
									style={styles.input}
									keyboardType="numeric"
									onChangeText={props.handleChange('price')}
									value={props.values.price}
								/>
							</View>
							<View style={styles.formGroup}>
								<Text style={styles.label}>Year Built:</Text>
								<TextInput
									multiline
									style={styles.input}
									keyboardType="numeric"
									onChangeText={props.handleChange('yearBuilt')}
									value={props.values.yearBuilt}
								/>
							</View>
							<View style={styles.formGroup}>
								<Text style={styles.label}>Address:</Text>
								<TextInput
									style={styles.input}
									onChangeText={props.handleChange('address')}
									value={props.values.address}
								/>
							</View>
							<View style={styles.formGroup}>
								<Text style={styles.label}>Description</Text>
								<TextInput
									multiline
									style={styles.input}
									onChangeText={props.handleChange('description')}
									value={props.values.description}
								/>
							</View>

							<View>
								<Button
									title="Add Home"
									onPress={props.handleSubmit} // submit the form .handleSubmit is a prop from Formik
									style={styles.buttonContainer}
								/>
							</View>
						</View>
					)}
				</Formik>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	form: {
		margin: 20,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
	},
	formGroup: {
		width: '100%',
	},
	label: {
		marginVertical: 10,
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 8,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	buttonContainer: {
		marginTop: 20,
	},
});

export default AddHomeScreen;
