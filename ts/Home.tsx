import React from 'react';
import { Text, View, Button as NativeButton } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { theme } from './theme';
import { Button } from './components/Button';

type HomeProps = NavigationScreenProps & {};

export function Home({ navigation }: HomeProps) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.colors.background,
			}}
		>
			<Text
				style={{
					color: theme.colors.primary,
					fontSize: 48,
					fontWeight: '900',
					marginBottom: 8,
				}}
			>
				Hangman
			</Text>
			<Text
				style={{
					textAlign: 'center',
					color: theme.colors.text,
					fontSize: 16,
					marginBottom: 5,
				}}
			>
				Let's learn spelling by playing!
			</Text>

			<Button
				label="Play"
				style={{ marginTop: 64 }}
				onPress={() => navigation.navigate('setup')}
			/>
		</View>
	);
}

Home.navigationOptions = {
	title: 'Home',
};
