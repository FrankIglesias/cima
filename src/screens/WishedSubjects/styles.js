import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  bigContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  pickerSelectStyles: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black'
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    flex: 1
  },
  subjectsContainer: {},
  red: {
    color: '#AE1131'
  },
  question: {
    fontSize: 16,
    textAlign: 'center'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
