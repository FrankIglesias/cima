import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Button from '../../component/Button';
import Input from '../../component/Input';
import PasswordInputText from '../../component/PasswordInput';
import styles from './styles';

import Toast, {DURATION} from 'react-native-easy-toast'
/*Falta harcodear user/pass y probar que valide */


class Login extends Component {

  state = {
      userName: 'usertest',
      password: '123456',
      inputPassword: 'aasda',
      inputUsername: 'asda'
    };

  onSubmit = () =>{
    if (this.state.password == this.state.inputPassword && this.state.userName == this.state.inputUsername) {
      this.props.navigation.push("Home")
    } else { this.refs.toast.show('Usuario o Contraseña Incorrecta');
  }
  }

  changeUserName = value =>  this.setState({inputUsername: value})
  changePassWord = value =>  this.setState({inputPassword: value})

  componentDidMount() {
    if (Object.keys(this.props.navigation).length) {
      this.setState({ navigation: this.props.navigation });
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.image}
          resizeMode="stretch"
        />
        <Input label='Usuario' onChangeText={this.changeUserName} />
        <PasswordInputText label='Contraseña' onChangeText={this.changePassWord} />
        <Button title="Ingresar" onPress={ this.onSubmit} />
        <Toast style={styles.toast}  defaultCloseDelay={100} ref="toast"/>
      </View>
    )
  }
}

export default Login;