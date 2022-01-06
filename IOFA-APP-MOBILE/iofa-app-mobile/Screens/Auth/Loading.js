import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../../src/depen/Colors';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        {
          // Our Brand Image Goes here  
        }
        <Text style={styles.Text}>Riofarm</Text>
      </View>
      <ActivityIndicator size="large" color={Colors.green} />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.dark,
  },
  Text: {
    color: Colors.green,
    marginTop: 20,
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  }
})
export default Loading;