import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'

//import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../src/depen/Colors';
import DonutChartComponentR_N_S from '../../src/Svg/DonutChartComponentR_N_S';


const Surveillance = ({ navigation, route }) => {
    const itemService = route.params;
    return (
        <SafeAreaView style={styles.DetailsScreen}>
            <View style={styles.DetailsScreenHeader}>
                <Icon name='arrow-left' size={26} color={Colors.green}
                    //onPress = {() => navigation.goBack()}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.DetailsScreenImageConatiner}>
                <Image source={itemService.img} style={styles.DetailsScreenImg} />
            </View>
            <View style={styles.DetailsScreenInfo}>
                <View style={styles.DetailsScreenInfoTitle}>
                    <Text style={styles.DetailsScreenInfoTitleTxt}>{itemService.name}</Text>
                </View>
                <View style={styles.DetailsScreenInfoDescription}>
                    <Text style={styles.DetailsScreenInfoDescriptionText} > {itemService.description} </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Surveillance






const styles = StyleSheet.create({
    DetailsScreen: {
        flex: 1,
        backgroundColor: Colors.dark,

    },
    DetailsScreenHeader: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    DetailsScreenImageConatiner: {
        flex: .45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DetailsScreenImg: {
        resizeMode: 'contain',
        flex: .9
    },
    DetailsScreenInfo: {
        flex: .55,
        backgroundColor: Colors.dark,
        marginBottom: 8,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 25,
        paddingTop: 25,

    },
    DetailsScreenInfoTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10,

    },
    DetailsScreenInfoTitleTxt: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: Colors.light,
    },
    DetailsScreenInfoTitleChape: {
        width: 85,
        justifyContent: 'center',
        height: 42,
        backgroundColor: Colors.green,
        borderTopLeftRadius: 22,
        borderBottomLeftRadius: 22
    },
    DetailsScreenInfoDescription: {
        paddingHorizontal: 20,
        marginTop: 10,

    },
    DetailsScreenInfoDescriptionText: {
        color: "#777",
        fontSize: 16,
        lineHeight: 21,
        marginTop: 5


    },
    ActionStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'



    },
    ActionStyleBtn: {
        width: 120,
        height: 40,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 25,



    },
    ActionStyleBtnTxt: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',

    },

    DanutChartSvgContainer: {
        paddingTop: 20,
        marginLeft: 90,
        height: 200,
        backgroundColor: "transparent",
        flexDirection: "row",
        // justifyContent : 'space-evenly',
        flexWrap: "wrap",

    },
})
