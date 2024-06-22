import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'
import {products} from '../../assets/data/products'
import { Product } from '@/src/types';

type ProductListItemProps = {
  product: Product
}

export const defaultImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png'

const ProductListItem = ({product}:ProductListItemProps) => {
  return(
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultImage}} resizeMode="contain" style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex:1,
    margin: 10,
    maxWidth: '40%'
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },
  price:{
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  image:{
    width:'100%',
    aspectRatio: 1,
  }
});
