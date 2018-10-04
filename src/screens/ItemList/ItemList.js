import React, { Component } from 'react';

import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { searchTermChanged } from '../../store/actions/actions';

class ItemList extends Component {
  renderItem = ({ item }) => (
    <View>
      <Text style={styles.listItem}>{item.name}</Text>
    </View>
  );

  render() {
    const { loading, items, searchTermChanged, filteredItems } = this.props;

    let content = (
      <Text>Loading items...</Text>
    );

    if (!loading && items.length) {
      content = (
        <FlatList
          data={filteredItems.length ? filteredItems : items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      );
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="search for.."
          onChangeText={(text) => searchTermChanged(text, items)}/>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    fontSize: 15,
    backgroundColor: 'red',
    marginBottom: 5
  },
  searchInput: {
    padding: 5,
    backgroundColor: 'white',
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    loading: state.main.loading,
    items: state.main.items,
    filteredItems: state.main.filteredItems
  }
};

const mapDispatchToProps = {
  searchTermChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);