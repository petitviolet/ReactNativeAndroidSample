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
  propTypes: {
    text: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          ToastAndroid.show(`Your input is ${this.props.text}`, ToastAndroid.SHORT)}
        background={TouchableNativeFeedback.SelectableBackground()}
        style={styles.toastButton}>
        <View>
          <Text style={styles.toastButtonText}>Tap me</Text>
        </View>
      </TouchableNativeFeedback>
    );
  },
});

var styles = StyleSheet.create({
  toastButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  toastButtonText: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
  }
});

module.exports = ToastButton;
