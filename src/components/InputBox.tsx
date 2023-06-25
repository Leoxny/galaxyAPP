import React, { FC } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { colors } from '../themes/theme';

interface InputProps extends TextInputProps {
  icon: string;
}

export const InputBox: FC<InputProps> = ({
  icon,
  onChangeText,
  value,
  placeholder,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <EvilIcons name={icon} size={24} color={colors.white} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3f3f4c',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginTop: 20
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: colors.white,
  },
});
