import { Text, View, CheckBox, ScrollView } from 'react-native';
import React, {Component, Fragment} from 'react';
import styles from './styles';
import Materias from './subjects';
import Button from '../../component/Button';

 

/* Esta clase es importante, ya que ponderará estas materias, para la recomendación.
Estaria bueno reutilizar el componente de la clase CARRER_FOLLOWER*/
class WishesSubjects extends Component {
  state = { checked: [] }


  componentDidMount() {
    var initArray = [];
    Materias.map((materia) => initArray.push(false));
    this.setState({ checked: initArray
    });
      if(Object.keys(this.props.navigation).length) {
        this.setState({navigation: this.props.navigation});
      }
  }
  onChangeCheck(indice) {
  this.state.checked[indice] =!this.state.checked[indice] ;
}

  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.question}>¿Que materias te gustaría cursar?</Text>
        <ScrollView contentContainerStyle={{paddingTop:20,paddingBottom:20}}style={styles.subjectsContainer}>
        {Materias.map((subject,index) =>
           <View style={styles.subjectContainer} key={subject.label}>
           <Text>{subject.label} </Text>
         <CheckBox  onValueChange={() => this.onChangeCheck(index)}  value ={this.state.checked[index]} style={styles.red} />
         </View>)} 
        </ScrollView>
        <Button key={"option.route"} title={"option.text"} onPress={() => {   this.state.navigation.push('Home'); }} />

      </View>
    )
  }
}
export default WishesSubjects;