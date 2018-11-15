import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  cardView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    margin: 5,
    marginTop: 0
  },
  cardViewText: {
    fontSize: 16,
    color: 'black',
    margin: 5
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
   // justifyContent: 'flex-end',
    marginLeft: 120

  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
toast: {
  backgroundColor:'#008000'
}
 
});