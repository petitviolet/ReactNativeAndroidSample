/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ToastButton = require('./ToastButton');
var TodoItem = require('./TodoItem');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
} = React;

var ReactSampleProject = React.createClass({
  getInitialState: function() {
    return {text: ""};
  },
  render: function() {
    var todoItem = {isChecked: false, label: 'hoge'};
    return (
      <View style={styles.container}>
       <Text>{this.state.text}</Text>
       <ToastButton text={this.state.text}/>
       <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
       <TodoItem label={todoItem.label} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  textInput: {
    marginLeft: 30,
    marginRight: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactSampleProject', () => ReactSampleProject);
