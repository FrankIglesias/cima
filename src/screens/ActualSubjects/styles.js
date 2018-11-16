import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  cardStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    margin: 5,
    marginTop: 0
  },
  circle: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 66 / 2,
    backgroundColor: 'gray',
    justifyContent: 'center'
  },
  centeredText: {
    textAlign: 'center',
    textDecorationColor: 'white',
    color: 'white',
    fontSize: 15
  },
  subjectCode: {
    color: 'black',
    fontSize: 16
  },
  dondeEstanLasMaterias: {
    color: 'black'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
