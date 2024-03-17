import React, { useEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { COLOR } from '../../theme/theme';
import { Images, routes } from '../../constants';
import Logo from '../../assets/images/shop_ez.svg';

const Splash = ({navigation}:any) => {
  const [animating, setAnimating] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace(routes.ONBOARD);
    }, 2000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar hidden />
      <View>
        <Logo/>
        <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
      </View>
      <View style={styles.splashBg}>
        <Image
          style={styles.bottomImage}
          source={Images.splash_bg}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.secondaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashBg: {
    position: 'absolute',
    bottom: 0,
  },
  bottomImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 'auto',
    aspectRatio: 17 / 16,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 50,
  },
});

export default Splash;
