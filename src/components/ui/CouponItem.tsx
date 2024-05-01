import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icoupon } from '../../types/model'
import { COLOR, FONTFAMILY, FONTWEIGHT } from '../../theme/theme'
import CouponIcon from '../../assets/images/tab_coupon.svg'

interface couponsProps {
  item: Icoupon
}

const CouponItem = ({ item }: couponsProps) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.top}>
        <View style={styles.iconArea}>
          <CouponIcon width={25} height={22} />
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>
            {item.points} points 10% on you bill amount
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.count}>
          {' '}
          <Text style={{ color: COLOR.primaryBlue }}>{item.total}</Text> coupons
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    borderColor: COLOR.textLightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconArea: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: COLOR.textLightGray,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    color: COLOR.textPrimaryBlack,
    fontFamily: FONTFAMILY.quicksand_bold,
    fontSize: 16,
  },
  subTitle: {
    color: COLOR.textSecondaryBlack,
    fontFamily: FONTFAMILY.quicksand_regular,
    fontSize: 14,
  },
  count: {
    color: COLOR.textPrimaryBlack,
    fontFamily: FONTFAMILY.quicksand_bold,
    fontSize: 16,
  },
})

export default CouponItem
