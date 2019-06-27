import React from 'react';
import { Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationScreenProps, NavigationEvents } from 'react-navigation';
import { theme } from './theme';
import { Button } from './components/Button';

type SetupProps = NavigationScreenProps & {};

export function Setup({ navigation }: SetupProps) {
	const inputRef = React.useRef<TextInput>(null);
	const [word, setWord] = React.useState('');

	return (
		<>
			<NavigationEvents
				onWillFocus={() => inputRef.current && inputRef.current.focus()}
			/>
			<KeyboardAvoidingView
				behavior="padding"
				style={
					{
						// flex: 1,
						// justifyContent: 'center',
						// alignItems: 'center',
						// backgroundColor: theme.colors.background,
					}
				}
			>
				<Text>Pick a word:</Text>
				<TextInput
					ref={inputRef}
					autoFocus
					autoCapitalize="characters"
					placeholder="Type a word to guess"
					value={word}
					onChangeText={text => setWord(text)}
					onSubmitEditing={startGame}
				/>
				<Button label="Start" disabled={word === ''} onPress={startGame} />
			</KeyboardAvoidingView>
		</>
	);

	function startGame() {
		if (word !== '') {
			navigation.navigate('game', { wordToGuess: word });
		}
	}
}

Setup.navigationOptions = {
	title: 'Pick a word',
};
