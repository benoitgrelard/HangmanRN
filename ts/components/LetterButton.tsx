import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { theme } from '../theme';

type LetterButtonProps = {
	letter: string;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
	onPress?: any;
};

export function LetterButton({
	letter,
	disabled,
	style,
	onPress,
}: LetterButtonProps) {
	return (
		<TouchableOpacity disabled={disabled} onPress={onPress}>
			<View
				style={[
					{
						alignItems: 'center',
						justifyContent: 'center',
						width: 64,
						height: 64,
						backgroundColor: theme.colors.secondary,
						borderRadius: 8,
						borderColor: theme.colors.secondaryDark,
						borderWidth: 1,
					},
					style,
					disabled ? { opacity: 0.3 } : {},
				]}
			>
				<Text
					style={{
						color: theme.colors.secondaryDark,
						fontSize: 16,
						fontWeight: '900',
					}}
				>
					{letter}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
