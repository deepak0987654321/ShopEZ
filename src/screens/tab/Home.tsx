import React, { useCallback, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { COLOR, FONTFAMILY } from '../../theme/theme'
import { Images } from '../../constants'
import OfferList from '../../components/ui/OfferList'
import CustomBackdrop from '../../components/ui/CustomBackdrop'

const Data = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
]

const Home = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])
  return (
    <>
      <SafeAreaView style={styles.conatiner}>
        <StatusBar backgroundColor={COLOR.white} barStyle="dark-content" />
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Text>click</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePresentModalClose}>
          <Text>close</Text>
        </TouchableOpacity>
        {/* Profile view */}
        <View style={styles.userView}>
          <View>
            <Text style={styles.introText}>Hello!</Text>
            <Text style={styles.userName}>Sivaguru</Text>
          </View>
          <View style={styles.profileView}>
            <Image style={styles.profile} source={Images.profile_img} />
          </View>
        </View>
        {/* Offer view */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.offer}>
          {/* Today offer */}
          <View style={styles.offerView}>
            <Text style={styles.offerText}>Today’s offers</Text>
            <OfferList data={Data} />
          </View>
          {/* best offer */}
          <View style={styles.offerView}>
            <Text style={styles.offerText}>Best offers</Text>
            <OfferList data={Data} />
          </View>
          {/* Free zone */}
          <View style={styles.offerView}>
            <Text style={styles.offerText}>Free zone</Text>
            <OfferList data={Data} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomSheetModal
        snapPoints={['70%']}
        index={0}
        ref={bottomSheetModalRef}
        enableDismissOnClose={true}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
      >
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  userView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileView: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  introText: {
    color: COLOR.textPrimaryBlack,
    fontSize: 14,
    fontFamily: FONTFAMILY.quicksand_bold,
    fontWeight: '600',
  },
  userName: {
    color: COLOR.primaryBlue,
    fontFamily: FONTFAMILY.quicksand_semibold,
    fontSize: 24,
    fontWeight: '600',
  },
  offer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  offerView: {
    paddingVertical: 10,
  },
  offerText: {
    color: COLOR.textPrimaryBlack,
    fontSize: 18,
    fontFamily: FONTFAMILY.quicksand_semibold,
    fontWeight: '600',
  },
})

export default Home
