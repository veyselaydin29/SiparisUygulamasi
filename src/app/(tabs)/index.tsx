import { StyleSheet, View } from 'react-native';

import products from '../../../assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product = {products[0]}/>
      <ProductListItem product = {products[1]}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  
});

