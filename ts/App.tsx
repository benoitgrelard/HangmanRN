import React from 'react';
import {
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator,
} from 'react-navigation';
import { theme } from './theme';
import { Home } from './Home';
import { Setup } from './Setup';
import { Game } from './Game';
import { Won } from './Won';
import { Lost } from './Lost';

const GameSwitch = createSwitchNavigator({
	game: Game,
	won: Won,
	lost: Lost,
});

const RootStack = createStackNavigator(
	{
		home: Home,
		setup: Setup,
		game: GameSwitch,
	},
	{
		initialRouteName: 'home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: theme.colors.primary,
			},
			headerTintColor: 'white',
		},
	},
);

const AppContainer = createAppContainer(RootStack);

export function App() {
	return <AppContainer />;
}
