import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const PhaseOne = (props) => {

  const [meterValue, setMetreValue] = useState(0);

  useEffect(() => {
    const userID = auth().currentUser;
    const dbRef = database().ref(`users/${userID.uid}/motor/`)
    dbRef
      .on('value', (res) => {
        if (res.val() !== null) {
          setMetreValue(res.val().ph1);
        }
      })
  }, [meterValue])

  const labels = [
    {
      name: 'low',
      labelColor: '#f4ab44',
      activeBarColor: '#f4ab44',

    },
    {
      name: 'Medium',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      name: 'High',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    }
  ]

  return (
    <View style={styles.SpeedBox}>
      <RNSpeedometer
        labels={labels}
        value={meterValue}
        size={100}
        minValue={0}
        maxValue={400}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 50,
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  SpeedBox: {
    width: Dimensions.get('window').width / 2
  }
})
export default PhaseOne;