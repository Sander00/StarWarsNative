import { createStackNavigator } from 'react-navigation';

import Categories from '../screens/Categories/Categories';
import ItemList from '../screens/ItemList/ItemList';

const Navigation = createStackNavigator({
  Categories: { screen: Categories },
  ItemList: { screen: ItemList }
}, {
  initialRouteName: 'Categories'
});

export default Navigation;