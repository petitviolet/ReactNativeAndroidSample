'use string';

var React = require('react-native');
var {
  TouchableNativeFeedback,
  StyleSheet,
  ToastAndroid,
  View,
  Text,
} = React;

var ToastButton = React.createClass({
  getInitialState: function () {
    return {text: 'hoge'};
  },
  render: function () {
    return (
      <TouchableNativeFeedback onPress={() => ToastAndroid.show(`Your input is ${this.state.text}`, ToastAndroid.SHORT)}  background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.toastButton}>
        <Text style={styles.toastButtonText}>Tap me</Text>
      </View>
      </TouchableNativeFeedback>
    );
  },
});

var styles = StyleSheet.create({
  toastButton: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  toastButtonText: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
  }
});

module.exports = ToastButton;
