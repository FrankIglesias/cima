import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  cardView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    margin: 5,
    marginTop: 0
  },
  cardViewText: {
    color: 'black',
    fontSize: 16
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
  alternativesContainer: {
    paddingVertical: 10
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
