import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions, DeviceEventEmitter } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import SmsAndroid from 'react-native-get-sms-android';

import Colors from '../../src/depen/Colors';

const Message = () => {

  const [userInformation, setUserInformation] = useState('');
  const [message, setMessage] = useState('')
  const [pump, setPump] = useState(false)
  const getUserPhoneNumber = () => {
    const userID = auth().currentUser;
    const dbRef = database().ref(`users/${userID.uid}`)

    dbRef
      .once('value')
      .then((res) => {
        setUserInformation(res.val())
      })
  }

  DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
    console.log(msg);
    setMessage(msg);
  });

  const ControlPump = (val) => {
    setPump(!val)
    let PhoneNumber = {
      "addressList": ["0799106096"]
    }
    SmsAndroid.autoSend(
      JSON.stringify(PhoneNumber),
      `CMD : ${val}`,
      (fail) => { console.log('Failed with this error: ' + fail) },
      (success) => { console.log('SMS sent successfully') },
    );
  }
  useEffect(() => {
    getUserPhoneNumber()
  }, [])
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.Heading}>Message</Text>
      </View>
      <View style={styles.smsPanalControle}>
        <View style={styles.smsWrapper}>
          <Text style={styles.smsHeading}>Pump control</Text>
          <Switch
            onValueChange={(val) => ControlPump(val)}
            value={pump}
          />
        </View>
        <Text>{message}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.dark,
    flex: 1,
  },
  Heading: {
    fontSize: 22,
    color: Colors.green,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  smsPanalControle: {
    flex: .8,
    marginTop: 45,
  },
  smsWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width - 60,
  },
  smsHeading: {
    fontFamily: 'Poppins-Regular',
    color: Colors.light,
  }
})
export default Message;
