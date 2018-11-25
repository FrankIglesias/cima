import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  taskBar: {
    paddingHorizontal: 20,
    backgroundColor: '#AE1131',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'gray'
  },
  taskBarText: {
    color: 'black',
    fontSize: 16,
    paddingVertical: 20,
    textAlign: 'center'
  },
  taskBarContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});
