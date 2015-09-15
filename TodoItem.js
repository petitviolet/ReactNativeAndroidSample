'use string';

var React = require('react-native');
var Switch = require('SwitchAndroid');

var {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
} = React;

var TodoItem = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
  },
  getInitialState: function () {
    return {
      isChecked: true,
    };
  },
  render: function () {
    var style = this.state.isChecked ? styles.todoStyle : styles.doneStyle;

    return (
      <View style={styles.container}>
        <Switch
          onValueChange={(value) => this.setState({isChecked: value})}
          value={this.state.isChecked}/>
        <Text style={style}>{this.props.label}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  todoStyle: {
    textDecorationLine: 'line-through',
    color: 'blue',
    fontSize: 30,
  },
  doneStyle: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 20,
  }
});

module.exports = TodoItem;

