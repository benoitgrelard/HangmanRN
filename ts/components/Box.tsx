import React from 'react';
import { View, ViewProps } from 'react-native';

type BoxProps = ViewProps & {};

export function Box(props: BoxProps) {
	return <View {...props} />;
}
