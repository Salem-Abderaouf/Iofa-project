import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../src/depen/Colors'

const styles = StyleSheet.create({
  TestDataCpm: {
    paddingTop: 20,
    height: 200,
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  TextValueDonutChart: {
    fontWeight: "900",
    marginLeft: 30,
  },

  TestScrool: {
    flex: 1,
    backgroundColor: "yellow",
  },
  DetailsScreen: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  DetailsScreenHeader: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DetailsScreenImageConatiner: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  DetailsScreenImg: {
    resizeMode: "contain",
    height: 300,
    flex: 0.9,
  },
  DetailsScreenInfo: {
    flex: 0.55,
    backgroundColor: Colors.dark,
    marginBottom: 8,
    marginTop: 25,
    paddingTop: 25,
  },
  DetailsScreenInfoTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 30,
    flexDirection: "row",
    marginVertical: 20,
  },
  DetailsScreenInfoTitle02: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    marginLeft: -10,
    marginTop: 30,
    marginBottom: 10,
  },
  DetailsScreenInfoTitleTxt: {
    fontSize: 21,
    fontFamily: 'Poppins-Regular',
    color: Colors.light,
    textAlign: 'center',
  },
  DetailsScreenInfoTitleTxt02: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center'
  },
  DetailsScreenInfoTitleChape: {
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    backgroundColor: Colors.green,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22,
  },
  DetailsScreenInfoTitleChapeRed: {
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    backgroundColor: "red",
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22,
  },
  DetailsScreenInfoTitleChapetEXT: {
    color: Colors.white,
    fontSize: 19,
    fontWeight: "bold",
  },
  DetailsScreenInfoDescription: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  DetailsScreenInfoDescriptionText: {
    color: "#777",
    fontSize: 16,
    lineHeight: 21,
    marginTop: 5,
  },
  ActionStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    width: Dimensions.get('window').width,
    flexDirection: "row",
  },
  ActionStyleBtnGreen: {
    width: 70,
    height: 40,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 20,
  },

  ActionStyleBtnRed: {
    width: 80,
    height: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  ActionStyleTemp: {
    width: 140,
    height: 40,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 8,
  },
  ActionStyleTempAbs: {
    color: Colors.dark,
    fontSize: 12,
  },

  ActionStyleBtnTxt: {
    color: Colors.dark,
    fontSize: 18,
  },
  LineShape: {
    backgroundColor: Colors.green,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 80,
    marginVertical: 20,
  },
  GraphLineContainer: {
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    elevation: 24,
  },
  GrapgContainerSvg: {
    backgroundColor: Colors.dark,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 50,
    paddingRight: 30,
  },
  DanutChartSvgContainer: {
    paddingTop: 20,
    height: 200,
    alignSelf: 'center',
    backgroundColor: Colors.dark,
    flexDirection: "row",
    alignItems: 'center',
    alignContent: 'center',
  },
  RNSpeedometerContainer: {
    backgroundColor: Colors.dark,
    marginBottom: 45,
    position: "relative",
    height: 200,
    flexDirection: "row",
    justifyContent: 'center',
  },
  RNSpeedometerItem: {
    position: "absolute",
  },
});
export default styles;