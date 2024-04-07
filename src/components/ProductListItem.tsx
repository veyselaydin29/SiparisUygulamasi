import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '@/src/constants/Colors';

const ProductListItem = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"></Image>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price} TL</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image:{
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  price:{
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },

});

