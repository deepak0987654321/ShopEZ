import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HeaderBackButton } from '@react-navigation/elements'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { routes } from '../constants'
import Home from '../screens/tab/Home'
import Coupons from '../screens/tab/Coupons'
import AddToCart from '../screens/tab/AddToCart'
import History from '../screens/tab/History'
import { COLOR } from '../theme/theme'
import {
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native'
import HomeIcon from '../assets/images/tab_home.svg'
import HistoryIcon from '../assets/images/tab_history.svg'
import CouponIcon from '../assets/images/tab_coupon.svg'
import AddtocartIcon from '../assets/images/tab_addtocart.svg'
import ScanIcon from '../assets/images/tab_scan.svg'
import Scan from '../screens/tab/Scan'
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const Tabnavigator = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation()
  const HeaderButton = () => {
    return (
      <HeaderBackButton
        labelVisible={false}
        canGoBack={true}
        backImage={() => (
          <Icon
            name="arrow-left-long"
            size={24}
            color={COLOR.textPrimaryBlack}
            onPress={() => {
              navigation.navigate('Home')
            }}
          />
        )}
      />
    )
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        // tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: COLOR.textPrimaryBlack,
        tabBarStyle: {
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: COLOR.white,
          height: 80,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLOR.textLightGray : COLOR.white,
                  padding: 12,
                  borderRadius: 15,
                }}
              >
                <HomeIcon
                  width={22}
                  height={22}
                  style={{
                    color: focused ? COLOR.primaryBlue : COLOR.textPrimaryBlack,
                  }}
                />
              </View>
            )
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: { borderBottomWidth: 0 },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => <HeaderButton />,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLOR.textLightGray : COLOR.white,
                  padding: 12,
                  borderRadius: 15,
                }}
              >
                <CouponIcon
                  width={22}
                  height={22}
                  style={{
                    color: focused ? COLOR.primaryBlue : COLOR.textPrimaryBlack,
                  }}
                />
              </View>
            )
          },
        }}
        name="Coupons"
        component={Coupons}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <ScanIcon width={30} height={30} />
              </View>
            )
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={() => console.log('test')}
              style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                width: 72,
                height: 72,
                borderRadius: 35,
                backgroundColor: COLOR.primaryBlue,
                ...styles.shadowStyle,
              }}
            >
              {props.children}
            </TouchableOpacity>
          ),
        }}
        name="Scan"
        component={Scan}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => <HeaderButton />,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLOR.textLightGray : COLOR.white,
                  padding: 12,
                  borderRadius: 15,
                }}
              >
                <AddtocartIcon
                  width={22}
                  height={22}
                  style={{
                    color: focused ? COLOR.primaryBlue : COLOR.textPrimaryBlack,
                  }}
                />
              </View>
            )
          },
        }}
        name="AddToCart"
        component={AddToCart}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => <HeaderButton />,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? COLOR.textLightGray : COLOR.white,
                  padding: 12,
                  borderRadius: 15,
                }}
              >
                <HistoryIcon
                  width={22}
                  height={22}
                  style={{
                    color: focused ? COLOR.primaryBlue : COLOR.textPrimaryBlack,
                  }}
                />
              </View>
            )
          },
        }}
        name="History"
        component={History}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
})

export default Tabnavigator
