import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { COLOR, FONTFAMILY } from '../../theme/theme';

interface AppInputprops {
    label: string;
    placeholder: string;
    value?: string
    keyboardType: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';
    editable?:boolean;
    name: string,
    validation?: any;
    onChangeText?: (value: string) => void;
} 

const AppInput = ({label, placeholder, value, keyboardType, editable,validation, name, onChangeText} : AppInputprops) => {
  return (
    <View style={[validation ? styles.errorContainer : styles.inputContainer]}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput style={styles.inputStyle} placeholderTextColor={COLOR.textSecondaryBlack} placeholder={placeholder} value={value} keyboardType={keyboardType} editable={editable} onChangeText={onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20
  },
  errorContainer: {
    marginBottom: 5
  },
  labelStyle: {
    fontFamily: FONTFAMILY.quicksand_medium,
    fontSize: 16,
    fontWeight: '500',
    color: COLOR.textPrimaryBlack,
    marginBottom: 8
  },
  inputStyle: {
    backgroundColor: COLOR.textLightGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: COLOR.textPrimaryBlack,
    height: 56
  }
})

export default AppInput;
