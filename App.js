import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component{
  render(){
      return (
        <View>
          <WelcomeScreen/>
        </View>
      );
  }
}
