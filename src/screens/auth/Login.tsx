import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { COLOR, FONTFAMILY } from '../../theme/theme'
import AppInput from '../../components/input/AppInput'
import Button from '../../components/button/Button'
import { useForm, Controller } from 'react-hook-form'
import { routes } from '../../constants'

type FormValues = {
  phoneNumber: string
}


const Login = ({navigation} : any) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { handleSubmit, control, register, formState:{errors} } = useForm<FormValues>({
    defaultValues: {
      phoneNumber: "",
    },
    mode: "onChange",
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
    navigation.replace(routes.HOME)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>Sign to your account</Text>
      </View>
      <View style={styles.innerView}>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: "Please enter the your phone number" },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput name="phoneNumber" label="Phone number" placeholder="Enter your details" value={value} keyboardType="phone-pad" validation={errors.phoneNumber} onChangeText={onChange} />
        )}
        name="phoneNumber"
      />
      {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>}

        {/* <AppInput name="phoneNumber" label="Phone number" placeholder="Enter your details" value={phoneNumber} keyboardType="phone-pad" onChangeText={(value) => setPhoneNumber(value)} /> */}
        <View style={{gap: 10}}>
           <Button title="Get started"  onPress={handleSubmit(onSubmit)} buttonType="primary" />
           <Button title="Continue as guest"  onPress={() => console.log('test')} buttonType="secondary" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLOR.white,
  },
  content:{
    alignItems: 'center',
    gap: 10,
    marginBottom: 40
  },
  innerView: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontFamily: FONTFAMILY.quicksand_bold,
    fontWeight: '600',
    color: COLOR.textPrimaryBlack,
    fontSize: 24,
  },
  subTitle: {
    fontFamily: FONTFAMILY.quicksand_regular,
    fontWeight: '400',
    color: COLOR.textSecondaryBlack,
    fontSize: 16,
  },
  errorText: {
    color: COLOR.error,
    marginBottom: 15,
  }
})

export default Login;
