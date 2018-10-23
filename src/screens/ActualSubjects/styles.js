import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardStyle: {
      paddingHorizontal: 5,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-around' ,
      margin: 5,
      marginTop: 0
    },
    circle: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 66/2,
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
    }
});