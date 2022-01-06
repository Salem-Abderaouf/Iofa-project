import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const AmpreOne = (props) => {
  const [ampValue, setAmpValue] = useState(0);

  useEffect(() => {
    const userID = auth().currentUser;
    const dbRef = database().ref(`users/${userID.uid}/motor/`)
    dbRef
      .on('value', (res) => {
        if (res.val() !== null && props.startPumb) {
          setAmpValue(res.val().amp1)
        }
        else {
          setAmpValue(0);
        }
      })
  }, [ampValue, props.startPumb])

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
        value={ampValue}
        size={100}
        minValue={0}
        maxValue={100}
      />
    </View>
  )
}
const styles = StyleSheet.create({

  SpeedBox: {
    width: Dimensions.get('window').width / 2
  }
})
export default AmpreOne;