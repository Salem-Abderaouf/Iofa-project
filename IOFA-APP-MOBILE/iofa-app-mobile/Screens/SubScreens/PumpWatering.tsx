

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import RNSpeedometer from "react-native-speedometer";

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../src/depen/Colors";


const getRemaining = (time) => {
  const mins = Math.floor((time % 3600) / 60);
  const secs = Math.floor((time % 3600) % 60);
  const heures = Math.floor(time / 3600);
  return { mins, secs, heures };
};

const PumpWatering = ({ navigation, route }) => {
  const [startPumb, setStartPumb] = useState(false);
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [meterValue, setMetreValue] = useState(0);
  const [meterValue02, setMetreValue02] = useState(0);
  const [meterValue03, setMetreValue03] = useState(0);

  const setStartPumbFun = () => {
    setStartPumb(true);
    setMetreValue(80);
    setMetreValue02(90);
    setMetreValue03(110);
  };

  const setEdnPumbFun = () => {
    setStartPumb(false);
    setMetreValue(0);
    setMetreValue02(0);
    setMetreValue03(0);
  };

  const { mins, secs, heures } = getRemaining(remainingSecs);

  useEffect(() => {
    let interval = null;
    if (startPumb) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs + 1);
      }, 1000);
    } else {
      //clearInterval(interval)
      setRemainingSecs(0);
    }

    return () => clearInterval(interval);
  }, [startPumb, remainingSecs]);

  const ColorsShape = () => {
    if (startPumb) {
      return "red";
    } else {
      return Colors.green;
    }
  };

  const GraphePumb = [];

  const ContainerHieght = 200;

  /* SVG */
  const LineCharpDataEx01 = [
    { month: "Jan", value: 70 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 52 },
    { month: "Apr", value: 80 },
    { month: "May", value: 180 },
    { month: "Jun", value: 10 },
    { month: "Jul", value: 60 },
    { month: "Aug", value: 189 },
    { month: "Sep", value: 119 },
    { month: "Oct", value: 10 },
    { month: "Nov", value: 170 },
    { month: "Dec", value: 200 },
  ];

  /*doNuT chart */

  const DataDonutChart = [
    {
      percentageDonutChartData: 8,
      colorDonutChartData: "green",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 24,
      colorDonutChartData: "#3bceb3",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 45,
      colorDonutChartData: "blue",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 80,
      colorDonutChartData: "orange",
      maxDonutChartData: "100",
    },
    {
      percentageDonutChartData: 17,
      colorDonutChartData: "#d2ab99",
      maxDonutChartData: "100",
    },
  ];

  /*doNuT chart */

  /* SVG */

  const itemService = route.params;

  return (
    <SafeAreaView style={styles.DetailsScreen}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.DetailsScreenHeader}>
          <Icon
            name="arrow-left"
            size={26}
            color={Colors.green}
            //onPress = {() => navigation.goBack()}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={styles.DetailsScreenImageConatiner}>
          <Image source={itemService.img} style={styles.DetailsScreenImg} />
        </View>

        <View style={styles.DetailsScreenInfo}>
          <View style={styles.DetailsScreenInfoTitle}>
            <Text style={styles.DetailsScreenInfoTitleTxt}>Pumb</Text>

            {startPumb ? (
              <View style={styles.DetailsScreenInfoTitleChape}>
                <Text style={styles.DetailsScreenInfoTitleChapetEXT}>On</Text>
              </View>
            ) : (
                <View style={styles.DetailsScreenInfoTitleChapeRed}>
                  <Text style={styles.DetailsScreenInfoTitleChapetEXT}>OFF</Text>
                </View>
              )}
          </View>

          <View style={styles.DetailsScreenInfoDescription}>
            <Text style={styles.DetailsScreenInfoDescriptionText}>
              {itemService.description}
            </Text>
          </View>

          <View style={styles.LineShape}></View>

          <View style={styles.DetailsScreenInfoTitle}>
            <Text style={styles.DetailsScreenInfoTitleTxt}>Pumb Controle</Text>
          </View>

          <View style={styles.ActionStyle}>
            <TouchableOpacity onPress={() => setStartPumbFun()}>
              <View style={styles.ActionStyleBtnGreen}>
                <Text style={styles.ActionStyleBtnTxt}>ON</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setEdnPumbFun()}>
              <View style={styles.ActionStyleBtnRed}>
                <Text style={styles.ActionStyleBtnTxt}>OFF</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.ActionStyleTemp}>
              <Text style={styles.ActionStyleTempAbs}> Timer</Text>
              <Text style={styles.ActionStyleBtnTxt}>
                {" "}
                {`${heures > 9 ? "" : "0"}${heures}:${
                  mins > 9 ? "" : "0"
                  }${mins}:${secs > 9 ? "" : "0"}${secs}`}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pump frequency(Volt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0v - 400v
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue}

              minValue={0}
              maxValue={400}
              allowedDecimals={0}
              labels={[
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "green",
                },

                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "red",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue02}

              minValue={0}
              maxValue={400}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },

                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{}}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              needleImage={require("../../src/Uploads/speedometreGreen.png")}
              labelStyle={{
                color: "green",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={
                {
                  // display:'none'
                }
              }
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue03}

              minValue={0}
              maxValue={400}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },

                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{
                backgroundColor: "transparent",
              }}
              labelWrapperStyle={{
                flexDirection: "row",

                justifyContent: "flex-end",
              }}
              labelStyle={{
                color: "blue",
                position: "absolute",
                right: 0,
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>




        </View>



        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            electric current(Amp)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0A - 100A
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue}

              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              labels={[
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "green",
                },


                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue02}

              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },

                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
                {
                  name: "P1",
                  labelColor: "green",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{}}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              needleImage={require("../../src/Uploads/speedometreGreen.png")}
              labelStyle={{
                color: "green",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={
                {
                  // display:'none'
                }
              }
            />
          </View>

          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={meterValue03}

              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },

                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
                {
                  name: "P2",
                  labelColor: "blue",
                  activeBarColor: "transparent",
                },
              ]}
              imageStyle={{
                backgroundColor: "transparent",
              }}
              wrapperStyle={{
                backgroundColor: "transparent",
              }}
              outerCircleStyle={{
                backgroundColor: "transparent",
              }}
              halfCircleStyle={{
                backgroundColor: "transparent",
              }}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
              labelStyle={{
                color: "blue",
                position: "absolute",
                right: 0,
                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>
        </View>


        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pumpb capacity(watt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0w - 100w
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={50}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "#F85C50",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>



        </View>

        <View style={styles.DetailsScreenInfoTitle}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            watering lines
          </Text>
        </View>


        <View style={styles.Detailspipelines}>
          <Image
            source={require("../../src/Uploads/pipeline.png")}
            style={styles.DetailsIms}
          />
          <Image
            source={require("../../src/Uploads/pipeline.png")}
            style={styles.DetailsIms}
          />
          <Image
            source={require("../../src/Uploads/pipeline.png")}
            style={styles.DetailsIms}
          />
        </View>

        <View style={styles.Detailspipelines}>
          <Text> Vane 01 </Text>
          <Text> Vane 02 </Text>
          <Text> Vane 03 </Text>

        </View>

        {/* Vane 01 start */}
        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Vane 01 (watt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0w - 100w
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={90}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>


        </View>

        <View style={styles.ActionStyle}>
          <TouchableOpacity onPress={() => setStartPumbFun()}>
            <View style={styles.ActionStyleBtnGreen}>
              <Text style={styles.ActionStyleBtnTxt}>ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEdnPumbFun()}>
            <View style={styles.ActionStyleBtnRed}>
              <Text style={styles.ActionStyleBtnTxt}>OFF</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.ActionStyleTemp}>
            <Text style={styles.ActionStyleTempAbs}> Timer</Text>
            <Text style={styles.ActionStyleBtnTxt}>
              {" "}
              {`${heures > 9 ? "" : "0"}${heures}:${
                mins > 9 ? "" : "0"
                }${mins}:${secs > 9 ? "" : "0"}${secs}`}
            </Text>
          </View>
        </View>

        {/* Vane 01 End */}



        {/* Vane 02 start */}
        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Vane 02 (watt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0w - 100w
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={20}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              labels={[
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>


        </View>

        <View style={styles.ActionStyle}>
          <TouchableOpacity onPress={() => setStartPumbFun()}>
            <View style={styles.ActionStyleBtnGreen}>
              <Text style={styles.ActionStyleBtnTxt}>ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEdnPumbFun()}>
            <View style={styles.ActionStyleBtnRed}>
              <Text style={styles.ActionStyleBtnTxt}>OFF</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.ActionStyleTemp}>
            <Text style={styles.ActionStyleTempAbs}> Timer</Text>
            <Text style={styles.ActionStyleBtnTxt}>
              {" "}
              {`${heures > 9 ? "" : "0"}${heures}:${
                mins > 9 ? "" : "0"
                }${mins}:${secs > 9 ? "" : "0"}${secs}`}
            </Text>
          </View>
        </View>

        {/* Vane 02 End */}



        {/* Vane 03 start */}
        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Vane 03 (watt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0w - 100w
          </Text>
        </View>

        <View style={styles.RNSpeedometerContainer}>
          <View style={styles.RNSpeedometerItem}>
            <RNSpeedometer
              value={70}
              innerCircleStyle={{
                backgroundColor: Colors.dark,
              }}
              minValue={0}
              maxValue={100}
              allowedDecimals={0}
              labels={[
                {
                  name: "P0",
                  labelColor: "red",
                  activeBarColor: "orange",
                },
              ]}
              needleImage={require("../../src/Uploads/sppedometreRed02.png")}
              labelWrapperStyle={{
                flexDirection: "row",
                justifyContent: "center",
              }}
              labelStyle={{
                color: "red",
                position: "absolute",

                top: 24,
                width: 72,
                borderColor: "#111",
                borderWidth: 2,
                textAlign: "center",
              }}
              labelNoteStyle={{
                // display:'none'
                width: 72,
                textAlign: "center",
              }}
            />
          </View>


        </View>

        <View style={styles.ActionStyle}>
          <TouchableOpacity onPress={() => setStartPumbFun()}>
            <View style={styles.ActionStyleBtnGreen}>
              <Text style={styles.ActionStyleBtnTxt}>ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEdnPumbFun()}>
            <View style={styles.ActionStyleBtnRed}>
              <Text style={styles.ActionStyleBtnTxt}>OFF</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.ActionStyleTemp}>
            <Text style={styles.ActionStyleTempAbs}> Timer</Text>
            <Text style={styles.ActionStyleBtnTxt}>
              {" "}
              {`${heures > 9 ? "" : "0"}${heures}:${
                mins > 9 ? "" : "0"
                }${mins}:${secs > 9 ? "" : "0"}${secs}`}
            </Text>
          </View>
        </View>

        {/* Vane 03 End */}
















        {/* <View style={styles.DetailsScreenInfoTitle}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
          Electricity Consumption (Kw)
          </Text>
        </View>

        <View style={styles.GraphLineContainer}>
          <LineChart
            CharpSvgColor="#2E86AB"
            CharpSvgVerticalLinesColor="#B5E2FA"
            CharpSvgPointsColor="#F24236"
            CharpSvgPointsLnesColor="#61d095"
            LineCharpData={LineCharpDataEx01}
          />
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
          pump working ratio(%)
          </Text>
        </View>

        <View style={styles.DanutChartSvgContainer}>
          <DonutChartComponentR_N_S
            key="00 Dounet"
            percentageDonutChart={98}
            colorDonutChart={"red"}
            delayDonutChart={500 + 10}
            maxDonutChart={120}
            radiusDonutChart={80}
          />
        </View> */}

        {/* <View style={styles.TestDataCpm}>
          {DataDonutChart.map((item, index) => {
            return (
              <DonutChartComponentR_N_S
                key={index}
                percentageDonutChart={item.percentageDonutChartData}
                colorDonutChart={item.colorDonutChartData}
                delayDonutChart={500 + 100 * index}
                maxDonutChart={100}
              />
            );
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PumpWatering;

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
    marginTop: 50,
  },
  DetailsScreenInfoTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
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
    fontFamily: 'Poppins-Medium',
    color: Colors.light
  },
  DetailsScreenInfoTitleTxt02: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
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
    fontSize: 18,
    fontFamily: 'Poppins-Medium'
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
    marginLeft: 10,
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
    backgroundColor: Colors.light,
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 20,
    paddingRight: 5,
    margin: 20,
    marginBottom: 5,
    shadowColor: "#786AB7",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  GrapgContainerSvg: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 50,
    paddingRight: 30,
  },
  DanutChartSvgContainer: {
    paddingTop: 20,
    marginLeft: 90,
    height: 250,
    backgroundColor: Colors.dark,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  RNSpeedometerContainer: {
    backgroundColor: Colors.dark,
    position: "relative",
    height: 250,
    flexDirection: "row-reverse",
    alignItems: 'center',
    justifyContent: 'center',
  },
  RNSpeedometerItem: {
    position: "absolute",
  },
  Detailspipelines: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  DetailsIms: {
    width: '20%',
    resizeMode: 'contain',
    height: 60
  }
});