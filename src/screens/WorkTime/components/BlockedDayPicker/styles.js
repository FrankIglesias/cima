import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  pickerContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dayText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  touchableButton: {
    width: 50,
    height: 20,
    backgroundColor: '#AE1131',
    color: 'white',
    textAlign: 'center'
  }
});
