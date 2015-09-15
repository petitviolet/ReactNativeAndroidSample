'use string';

var React = require('react-native');

var {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableNativeFeedback,
} = React;

var RssItemList = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
  },
  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      rssItems: dataSource.cloneWithRows([]),
    };
  },
  render: function () {
    return (
      <View>
      <TouchableNativeFeedback onPress={() => this._AddItem}>
        <View>
          <Text style={styles.addButton}>add</Text>
        </View>
      </TouchableNativeFeedback>
      <ListView
        dataSource={this.state.rssItems}
        renderRow={(rowData) => <Text style={styles.listText}>{rowData.title}: {rowData.description}</Text>}
      />
      </View>
    )
  },
  _AddItem: function() {
    var defaultItem = {title: 'title', description: 'description'};
    this.state.rssItems.push(defaultItem);
    this.setState({rssItems: dataSource.cloneWithRows([defaultItem])});
  }
});

var styles = StyleSheet.create({
  listText: {
    fontSize: 20,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: 'green',
    color: 'white',
    fontSize: 30,
  }
});

module.exports = RssItemList;
