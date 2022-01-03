import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import auth from '@react-native-firebase/auth'

import Colors from '../../src/depen/Colors';

const Profile = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.Heading}>Profile</Text>
      </View>
      <TouchableHighlight
        style={styles.SignOutButton}
        onPress={() => auth().signOut()}
      >
        <>
          <Icon name="enter" size={22} />
          <Text style={styles.SignOutText}>sign out</Text>
        </>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.dark,
    paddingTop: 10,
  },
  SignOutButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    height: 64,
    width: 120,
    borderRadius: 32,
    backgroundColor: Colors.red,
    bottom: 103,
    right: 20,
  },
  SignOutText: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },
  Heading: {
    fontSize: 22,
    color: Colors.green,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  }
})
export default Profile;
