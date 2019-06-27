import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { theme } from './theme';
import { Button } from './components/Button';

type LostParams = { wordToGuess: string };
type LostProps = NavigationScreenProps<LostParams> & {};

export function Lost({ navigation }: LostProps) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.colors.background,
			}}
		>
			<Text>Lost :(</Text>
			<Button
				label="Try again"
				onPress={() =>
					navigation.navigate('game', {
						wordToGuess: navigation.getParam('wordToGuess'),
					})
				}
			/>
		</View>
	);
}

Lost.navigationOptions = {
	title: 'Lost',
};
