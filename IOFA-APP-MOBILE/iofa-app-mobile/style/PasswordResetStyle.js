import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../src/depen/Colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 3,
  },
  brand: {
    color: Colors.dark,
    fontSize: 32,
    fontWeight: 'bold',
  },
  textbox: {
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  popup: {
    display: 'flex',
  },
  hide: {
    display: 'none'
  },
  inActive: { display: 'none' },
  button: {
    elevation: 2,
    alignSelf: 'center',
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    textAlign: 'center',
    padding: 15,
    backgroundColor: Colors.green,
    borderRadius: 8,

    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    height: 65,
    backgroundColor: 'transparent',
    borderColor: Colors.dark,
    color: Colors.dark,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 20,
  },
  disabled: {
    elevation: 8,
    alignSelf: 'center',
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    textAlign: 'center',
    padding: 15,
    backgroundColor: 'grey',
    borderRadius: 8,

    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 17,

    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
  btnHandler: {
    position: 'absolute',
    right: 5,
    zIndex: 888,
  },
});
export default styles;