import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  cardView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    marginTop: 0
  },
  cardViewText: {
    fontSize: 16,
    color: 'black'
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
    fontSize: 16
  },
  alternativesContainer: {
    paddingVertical: 10
  },
  icon: {
    marginRight: 5
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toast: {
    backgroundColor: '#008000'
  }
});
