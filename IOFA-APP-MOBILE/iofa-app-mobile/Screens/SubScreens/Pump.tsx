import React, { useState, useEffect } from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../src/depen/Colors";
import DonutChartComponentR_N_S from "../../src/Svg/DonutChartComponentR_N_S";

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import LineChart from "../../src/Svg/LineChart ";
import styles from '../../style/PumpStyle';
import PhaseOne from "../atoms/PhaseOne";
import PhaseTwo from "../atoms/PhaseTwo";
import PhaseThree from "../atoms/PhaseThree";
import AmpreOne from "../atoms/AmpreOne";
import Ampretwo from "../atoms/Ampretwo";
import AmpreThree from "../atoms/AmpreThree";
import Puissance from "../atoms/Puissance";

const getRemaining = (time) => {
  const mins = Math.floor((time % 3600) / 60);
  const secs = Math.floor((time % 3600) % 60);
  const heures = Math.floor(time / 3600);
  return { mins, secs, heures };
};

const Pump = ({ navigation, route }) => {
  const [startPumb, setStartPumb] = useState(false);
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [response, setResponse] = useState(null)

  useEffect(() => {
    const userID = auth().currentUser.uid;
    const dbRef = database().ref(`users/${userID}/pump`)
    dbRef
      .once('value')
      .then((res) => { setResponse(res.val().status) })
    console.log(response)
  })
  useEffect(() => {
    let interval = null;
    if (startPumb) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs + 1);
      }, 1000);
    } else {
      setRemainingSecs(0);
    }

    return () => clearInterval(interval);
  }, [startPumb, remainingSecs]);


  const setStartPumbFun = () => {
    const userID = auth().currentUser.uid;
    const dbRef = database().ref(`users/${userID}/pump`)
    dbRef.update({
      cmd: 'on',
    })
    setStartPumb(true);
  };

  const setEdnPumbFun = () => {
    const userID = auth().currentUser.uid;
    const dbRef = database().ref(`users/${userID}/pump`)
    dbRef.update({
      cmd: 'off',
    })
    setStartPumb(false);
  };

  const { mins, secs, heures } = getRemaining(remainingSecs);
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


  const itemService = route.params;

  return (
    <SafeAreaView style={styles.DetailsScreen}>
      <ScrollView nestedScrollEnabled={false}>
        <View style={styles.DetailsScreenHeader}>
          <Icon
            name="arrow-left"
            size={26}
            color={Colors.green}
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
            <TouchableOpacity
              style={styles.ActionStyleBtnGreen}
              onPress={() => setStartPumbFun()}>
              <Text style={styles.ActionStyleBtnTxt}>ON</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ActionStyleBtnRed}
              onPress={() => setEdnPumbFun()}>
              <Text style={styles.ActionStyleBtnTxt}>OFF</Text>
            </TouchableOpacity>

            <View style={styles.ActionStyleTemp}>
              <Text style={styles.ActionStyleTempAbs}> Timer</Text>
              <Text style={styles.ActionStyleBtnTxt}>
                {`${heures > 9 ? "" : "0"}${heures}:${
                  mins > 9 ? "" : "0"
                  }${mins}:${secs > 9 ? "" : "0"}${secs}`}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pump Voltage (Volt)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0v - 400v
          </Text>
        </View>
        <View style={styles.logValue}>
          <PhaseOne />
          <PhaseTwo />
          <PhaseThree />
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pump current(Amp)
          </Text>
          <Text style={styles.DetailsScreenInfoTitleTxt02}>
            0A - 100A
          </Text>
        </View>
        <View style={styles.logValue}>
          <AmpreOne startPumb={startPumb} />
          <Ampretwo startPumb={startPumb} />
          <AmpreThree startPumb={startPumb} />
        </View>
        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Pump puissance(watt)
          </Text>
        </View>
        <Puissance />

        <View style={styles.DetailsScreenInfoTitle}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            Electricity Consumption (Kw)
          </Text>
        </View>

        <View style={styles.GraphLineContainer}>
          <LineChart
            CharpSvgColor={Colors.light}
            CharpSvgVerticalLinesColor={Colors.grey}
            CharpSvgPointsColor={Colors.green}
            CharpSvgPointsLnesColor={Colors.green}
            LineCharpData={LineCharpDataEx01}
          />
        </View>

        <View style={styles.DetailsScreenInfoTitle02}>
          <Text style={styles.DetailsScreenInfoTitleTxt}>
            pump working ratio %
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
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default Pump;

