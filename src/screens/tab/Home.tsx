import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { COLOR } from "../../theme/theme";

const Home = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
        <StatusBar backgroundColor={COLOR.white} barStyle="dark-content"/>
        <ScrollView>
          <View>
            <Text>Home ffdfdfdfdfdfdfdf</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white
  }
})

export default Home;
