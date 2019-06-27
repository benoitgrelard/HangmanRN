import React from 'react';
import { Text, View } from 'react-native';
import {
	NavigationScreenProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { theme } from './theme';
import { Button } from './components/Button';

type WonProps = NavigationScreenProps & {};

export function Won({ navigation }: WonProps) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.colors.background,
			}}
		>
			<Text>Won!</Text>
			<Button label="Play again" onPress={() => navigation.navigate('home')} />
		</View>
	);
}

Won.navigationOptions = {
	title: 'Won',
} as NavigationStackScreenOptions;
