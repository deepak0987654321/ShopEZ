import React from 'react'
import {TouchableOpacity, Text,StyleSheet, ActivityIndicator} from 'react-native';
import { COLOR } from '../../theme/theme';

interface ButtonProps {
  onPress?: () => void;
  onLongPress?: () => void;
  title: string;
  buttonType?: string,
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({title,iconLeft,iconRight,disabled,loading,buttonType, onPress,onLongPress}: ButtonProps) => {
  return (
    <TouchableOpacity
     onPressIn={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[disabled ? styles.disabledButton : buttonType === 'primary' ? styles.primaryButton : styles.secondaryButton, styles.button ]}
    >
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[buttonType === 'primary' ? styles.primaryText : styles.secondaryText, styles.buttonText]}>{title}</Text>
      )}
      {iconRight}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    // Add any additional styles or override default styles here
  },
  primaryButton: {
    backgroundColor: COLOR.primaryBlue,
  },
  secondaryButton: {
    backgroundColor: COLOR.textLightGray,
  },
  disabledButton: {
    backgroundColor: 'grey',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
  },
  buttonText: {
    fontSize: 16,
  },
  primaryText: {
    color: COLOR.white,
  },
  secondaryText: {
    color: COLOR.primaryBlue,
  }
});

export default Button;
