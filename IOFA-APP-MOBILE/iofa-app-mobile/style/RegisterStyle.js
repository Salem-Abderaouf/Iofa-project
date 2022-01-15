import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../src/depen/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "space-evenly",
    alignItems: 'center',
    zIndex: 2,
  },
  inActive: { display: 'none' },
  heading: {
    position: "relative",
    top: 10,
    marginBottom: 10,
    fontSize: 22,
    color: Colors.dark,
    fontWeight: 'bold',

    textAlign: "left",
  },
  textbox: {
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: Colors.green,

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
  button: {
    elevation: 2,
    alignSelf: 'center',
    marginVertical: 15,
    width: Dimensions.get('window').width - 60,
    textAlign: 'center',
    padding: 15,
    backgroundColor: Colors.green,
    borderRadius: 8,

    fontWeight: 'bold',
  },
  input: {
    height: 65,
    marginVertical: 10,
    width: Dimensions.get('window').width - 60,
    backgroundColor: 'transparent',
    borderColor: Colors.dark,
    borderRadius: 12,
    borderWidth: 1,
    color: Colors.dark,
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
  link: {
    marginVertical: 10,
    color: Colors.green,
  },
  btnHandler: {
    position: 'absolute',
    right: 5,
    zIndex: 888,
  },
  secureEntry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;