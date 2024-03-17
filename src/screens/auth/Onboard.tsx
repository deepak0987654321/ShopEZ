import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet,Image, StatusBar, SafeAreaView} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { COLOR, FONTFAMILY } from '../../theme/theme';
import Button from '../../components/button/Button';
import { Images, routes } from '../../constants';


const Onboard = ({navigation}:any) => {
    const onboardingRef = useRef<any>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const changePageHandler = (index:number) => {
        setPageIndex(index);
    };
    console.log(pageIndex)
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLOR.white} barStyle={'dark-content'} translucent={false} />
            {/* SKIP */}
            <View style={styles.skip}>
                <Text style={styles.skipText} onPress={() => navigation.replace(routes.LOGIN)}>Skip</Text>
            </View>
            <Onboarding
                containerStyles={styles.onboardContainer}
                imageContainerStyles={styles.imageContainer}
                titleStyles={styles.titleContainer}
                subTitleStyles={styles.subTitleContainer}
                bottomBarHighlight={false}
                showSkip={false}
                bottomBarHeight={10}
                ref={onboardingRef}
                showNext={false}
                showDone={false}
                pageIndexCallback={changePageHandler}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image style={styles.onboardImage} source={Images.onboard_scan} />,
                        title: 'Scan, Bag, Go',
                        subtitle: 'Use your smartphone to scan and bag your items as you put them in your cart.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={styles.onboardImage} source={Images.onboard_budget} />,
                        title: 'Budget monitor',
                        subtitle: 'Monitor your budget as you walk the store.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={styles.onboardImage} source={Images.onboard_checkout} />,
                        title: 'Easy checkout',
                        subtitle: 'Faster checkout by simply scanning the barcode on your mobile phone at any register',
                    },
                ]}
            />
            <View style={styles.innerView}>
                {/* BTN-CONTINUE */}
                <View>
                    {
                        pageIndex !== 2 ? <Button title="Continue"  onPress={() => onboardingRef.current.goNext()} buttonType="primary" /> : <Button title="Get started"  onPress={() => navigation.replace(routes.LOGIN)} buttonType="primary" />
                    }
                </View>
                {/* BTN-CONTINUE */}
                <View style={styles.space}>
                    <Button title="Continue as guest"  onPress={() => navigation.replace(routes.LOGIN)} buttonType="secondary" />
                </View>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    skip:{
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    innerView: {
        // flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    onboardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
    },
    imageContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
        paddingTop: 0,
        margin: 0,
    },
    onboardImage: {
        width: '100%', height: 300, resizeMode: 'contain',
    },
    titleContainer: {
        marginTop: 20,
        fontFamily: FONTFAMILY.quicksand_bold,
        fontWeight: '600',
        color: COLOR.textPrimaryBlack,
    },
    subTitleContainer: {
        fontFamily: FONTFAMILY.quicksand_semibold,
        color: COLOR.textSecondaryBlack,
        fontSize: 18,
        lineHeight: 30,
        marginHorizontal: 30,
    },
    skipText: {
        color: COLOR.secondaryBlue,
        fontFamily: FONTFAMILY.quicksand_semibold,
        fontWeight: '600',
        fontSize: 14,
    },
    space: {
        marginTop: 15
    }
});

export default Onboard;
