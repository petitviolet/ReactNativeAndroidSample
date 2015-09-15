/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ToastButton = require('./ToastButton');
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
    return {text: "sample"};
  },
  render: function() {
    var MOCKED_MOVIES_DATA = [
      {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
    ];
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
       <Text>{this.state.text}</Text>
       <Text>{movie.title}</Text>
       <Text>{movie.year}</Text>
       <Image style={styles.thumbnail} source={{uri: movie.posters.thumbnail}} />
       <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text} />
       <ToastButton />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: { width: 30, height: 30, },
});

AppRegistry.registerComponent('ReactSampleProject', () => ReactSampleProject);
