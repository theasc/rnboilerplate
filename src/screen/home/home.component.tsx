import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {IHomeProps} from '../../models/screens/homeProps.type';

export function HomeComponent({
  backgroundColor,
  updateBackgroundColor,
}: IHomeProps) {
  const [pressed, setPressed] = useState(false);
  const toggleBackground = () => {
    updateBackgroundColor(pressed ? 'blue' : 'green');
    setPressed(!pressed);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      }}>
      <Text>Home screen</Text>
      <Pressable onPress={toggleBackground}>
        <Text>Toggle background</Text>
      </Pressable>
    </View>
  );
}
