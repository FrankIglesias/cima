import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
 pickerSelectStyles:{
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    subjectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    subjectsContainer: {
    },
    red: {
        color: '#AE1131'
    },
    question: {
        fontSize: 16,
        textAlign: 'center',
    }
});