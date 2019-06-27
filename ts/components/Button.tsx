import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { theme } from '../theme';

type ButtonProps = {
	label: string;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
	onPress?: any;
};

export function Button({ label, disabled, style, onPress }: ButtonProps) {
	return (
		<TouchableOpacity disabled={disabled} onPress={onPress}>
			<View
				style={[
					{
						paddingHorizontal: 24,
						paddingVertical: 12,
						backgroundColor: theme.colors.primary,
						borderRadius: 9999,
					},
					style,
					disabled ? { opacity: 0.3 } : {},
				]}
			>
				<Text
					style={{
						color: 'white',
						fontSize: 16,
						fontWeight: '900',
						textTransform: 'uppercase',
						textAlign: 'center',
					}}
				>
					{label}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
