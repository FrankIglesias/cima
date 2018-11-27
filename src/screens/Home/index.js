import React from 'react';
import { WebView } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://sear-utn.herokuapp.com/' }}
        style={{ marginTop: 20 }}
        javaScriptEnabled
      />
    );
  }
}

export default Home;