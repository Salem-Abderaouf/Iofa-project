import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import Colors from '../src/depen/Colors';

const Notifications = () => {
  const [data, setdata] = React.useState(null)

  React.useEffect(() => {
    const userID = auth().currentUser.uid;
    const dbRef = database().ref(`users/${userID}/notifications`)
    dbRef.once('value')
      .then((res) => {
        setdata(res.val())
      })
  }, [data])

  return (
    <View style={styles.wrapper}>
      <Text style={styles.Heading}>Notifications</Text>
      {data !== null ?
        Object.values(data || {}).map((items) => {
          return (
            <View style={styles.NotificationBox}>
              <Text style={styles.NText}>{items.msg}</Text>
              <Text style={styles.NText}>{items.date}</Text>
            </View>
          )
        })
        :
        <View style={styles.NONotificationBox}>
          <Text style={styles.Text}> No Notifications yet </Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.dark,
    paddingTop: 20,
  },
  Heading: {
    fontSize: 22,
    color: Colors.green,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
    marginBottom: 20,
  },
  NotificationBox: {
    width: Dimensions.get('window').width - 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  NText: {
    color: Colors.light,
    fontFamily: 'Poppins-Regular'
  },
  NONotificationBox: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 2 - 140,
  },
  Text: {
    color: Colors.light,
    fontFamily: 'Poppins-Regular'
  }
})
export default Notifications;