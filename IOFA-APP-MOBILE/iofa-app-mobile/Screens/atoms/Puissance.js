import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNSpeedometer from 'react-native-speedometer'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Puissance = () => {
  const [meterValue, setMetreValue] = React.useState(0);
  const [AmpValue, setValue] = React.useState(0)

  React.useEffect(() => {
    const userID = auth().currentUser;
    const dbRef = database().ref(`users/${userID.uid}/motor/`)
    dbRef
      .on('value', (res) => {
        if (res.val() !== null) {
          setValue(res.val().amp1)
          setMetreValue(res.val().ph1);
        }
      })
  }, [])

  console.log(Number(meterValue), Number(AmpValue))
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
        value={0.85 * Number(meterValue) * Number(AmpValue)}
        size={280}
        minValue={0}
        maxValue={100000}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  SpeedBox: {
    marginBottom: 50,
  }
})
export default Puissance;