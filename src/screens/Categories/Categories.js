import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getCategories, getItemsForCategory } from '../../store/actions/actions';

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

class Categories extends Component {
  static navigationOptions = {
    title: 'Categories'
  };

  componentWillMount() {
    this.props.getCategories();
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  categoryPressed = categoryName => {
    this.props.getItemsForCategory(categoryName);

    this.props.navigation.navigate('ItemList');
  };

  renderItem = ({ item }) => {
    const categoryName = this.getKeyByValue(this.props.categories, item);

    return (
      <TouchableOpacity onPress={() => this.categoryPressed(categoryName)}>
        <Text style={styles.listItem}>{categoryName}</Text>
      </TouchableOpacity>
    )
  };

  render() {
    const { loading, categories } = this.props;
    const categoryList = Object.values(categories);

    let content = (
      <Text>Loading categories..</Text>
    );

    if (!loading && categoryList.length) {
      content = (
        <FlatList
          data={categoryList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      )
    }

    return (
      <View>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    fontSize: 15,
    backgroundColor: "red",
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    loading: state.main.loading,
    categories: state.main.categories
  }
};

const mapDispatchToProps = {
  getCategories,
  getItemsForCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);