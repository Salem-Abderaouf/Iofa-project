import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../src/depen/Colors';

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 3,
  },
  textbox: {
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  inActive: { display: 'none' },
  heading: {
    fontSize: 22,
    color: Colors.dark,
    fontWeight: 'bold',
    fontFamily: 'Poppins-bold',
    textAlign: "left",
  },
  error: {
    color: Colors.red,
    textTransform: "lowercase",
    fontSize: 12,
    padding: 15,
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: Colors.green,
    fontFamily: 'Poppins-light',
    textAlign: "left",
  },
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
    borderColor: Colors.dark,
    color: Colors.dark,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 20,
  },
  secureEntry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyesStyle: {
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    color: Colors.Black,
    position: 'absolute',
    zIndex: 4,
    top: 15,
    right: 0,
  },
  buttonText: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
  link: {
    color: Colors.green,
  },
  btnHandler: {
    position: 'absolute',
    right: 5,
    zIndex: 888,
  },
});
export default styles;