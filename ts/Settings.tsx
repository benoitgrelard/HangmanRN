import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { theme } from './theme';
import { Button } from './components/Button';

type SettingsProps = NavigationScreenProps & {};

export function Settings({ navigation }: SettingsProps) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<Text>Settings</Text>
			<Button label="Dismiss" onPress={() => navigation.goBack()} />
		</View>
	);
}

Settings.navigationOptions = {
	title: 'Settings',
};
