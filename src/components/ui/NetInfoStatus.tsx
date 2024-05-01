import React from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, StyleSheet, Linking } from 'react-native'
import CustomBackdrop from './CustomBackdrop'
import { COLOR, FONTFAMILY } from '../../theme/theme'
import Button from '../button/Button'

interface NetInfoStatusProps {
  bottomSheetModalRef: BottomSheetModal | any
}

const NetInfoStatus = ({ bottomSheetModalRef }: NetInfoStatusProps) => {
  return (
    <>
      <BottomSheetModal
        snapPoints={['35%']}
        index={0}
        ref={bottomSheetModalRef}
        enableDismissOnClose={true}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ display: 'none' }}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
      >
        <BottomSheetView>
          <View style={styles.container}>
            <Icon
              name="cloud-offline-outline"
              size={85}
              color={COLOR.textPrimaryBlack}
            />
            <Text style={styles.title}>You're offline!</Text>
            <Text style={styles.content}>
              Turn on mobile data or connect to a Wi-Fi. or just take break go
              for a walk.
            </Text>
            <Button
              title="Ok"
              onPress={() => bottomSheetModalRef.current?.close()}
              buttonType="primary"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLOR.primaryBlue,
    fontFamily: FONTFAMILY.quicksand_bold,
    fontSize: 30,
    marginBottom: 20,
  },
  content: {
    color: COLOR.textSecondaryBlack,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default NetInfoStatus
