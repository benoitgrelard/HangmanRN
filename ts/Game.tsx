import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProps, NavigationState } from 'react-navigation';
import { theme } from './theme';
import { LetterButton } from './components/LetterButton';

const GUESSES_COUNT = 5;
const LETTERS = Array.from({ length: 26 }, (_, i) =>
	String.fromCharCode(65 + i),
);

type GameParams = { wordToGuess: string };
type GameProps = NavigationScreenProps<GameParams> & {};

export function Game({ navigation }: GameProps) {
	const wordToGuess = navigation.getParam('wordToGuess');
	const [remainingGuessesCount, setRemainingGuessesCount] = React.useState(
		GUESSES_COUNT,
	);
	const [guesses, setGuesses] = React.useState({});

	React.useEffect(() => {
		if (remainingGuessesCount === 0) {
			navigation.navigate('lost');
		}
	}, [remainingGuessesCount]);

	React.useEffect(() => {
		const isWordGuessed = wordToGuess
			.split('')
			.every(letter => letter in guesses);
		if (isWordGuessed) {
			navigation.navigate('won');
		}
	}, [guesses]);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.colors.background,
			}}
		>
			<View style={{ flex: 1 }}>
				<Text>Remaining guesses: {remainingGuessesCount}</Text>
				<WordToGuess word={wordToGuess} guesses={guesses} />
			</View>
			<View
				style={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					padding: 16,
				}}
			>
				{LETTERS.map(letter => (
					<LetterButton
						key={letter}
						letter={letter}
						disabled={letter in guesses}
						style={{ marginBottom: 4 }}
						onPress={() => {
							const isInWord = wordToGuess.includes(letter);
							if (!isInWord) {
								setRemainingGuessesCount(count => count - 1);
							}
							setGuesses(guesses => ({ ...guesses, [letter]: isInWord }));
						}}
					/>
				))}
			</View>
		</View>
	);
}

Game.navigationOptions = {
	title: 'Game',
};

type WordToGuessProps = {
	word: string;
	guesses: Record<string, boolean>;
};

function WordToGuess({ word, guesses }: WordToGuessProps) {
	return (
		<Text>
			{word.split('').map(letter => {
				const wasSuccessful = guesses[letter] === true;
				return wasSuccessful ? letter + ' ' : '_ ';
			})}
		</Text>
	);
}
