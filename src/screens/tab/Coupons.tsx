import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native'
import { COLOR } from '../../theme/theme'
import { Icoupon } from '../../types/model'
import CouponItem from '../../components/ui/CouponItem'

const data: Icoupon[] = [
  {
    id: '1',
    name: 'Merchant name',
    points: 1000,
    total: 5,
  },
  {
    id: '2',
    name: 'Merchant name',
    points: 5000,
    total: 5,
  },
  {
    id: '3',
    name: 'Merchant name',
    points: 1000,
    total: 5,
  },
  {
    id: '4',
    name: 'Merchant name',
    points: 1000,
    total: 5,
  },
  {
    id: '5',
    name: 'Merchant name',
    points: 1000,
    total: 5,
  },
]

const Coupons = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <StatusBar backgroundColor={COLOR.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.coupon}>
        <View>
          <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: 15 }}
            initialNumToRender={3}
            data={data}
            renderItem={CouponItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  coupon: {
    flex: 1,
    paddingHorizontal: 20,
  },
})

export default Coupons
