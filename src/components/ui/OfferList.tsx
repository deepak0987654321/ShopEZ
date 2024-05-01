import React from 'react'
import { FlatList, Text, View } from 'react-native'
import OfferImg from '../../assets/images/offer_placeholder_img.svg'

type Item = {
  id: string
}

interface OfferListProps {
  data: Item[]
}

interface offerItemProps {
  item: Item
}

const OfferItem = ({ item }: offerItemProps) => {
  return (
    <View style={{ paddingRight: 10 }}>
      {/* <Text>{item.id}</Text> */}
      <OfferImg style={{ width: '100%' }} />
    </View>
  )
}

const OfferList = ({ data }: OfferListProps) => {
  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 15 }}
        scrollEnabled
        initialNumToRender={3}
        horizontal
        data={data}
        renderItem={OfferItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default OfferList
