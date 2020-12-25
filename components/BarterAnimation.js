import React from 'react';
import LottieView from 'lottie-react-native';

export default class BarterAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/data.json')}
      style={{width: '100%' }}
      autoPlay loop />
    )
  }
}
