import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/ProductsReducer';
import { Post } from '../Post';
import { Loading } from '../Loading';


export const TestProducts = ({ navigation } : {navigation: any}) => {
  const dispatch = useDispatch<any>();
  const products = useSelector((state: any) => state.products);
  const isLoading = useSelector((state: any) => state.loading);

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <View>
        <FlatList
        data={products}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('SinglePost', { item })}>
            <Post product={item} />
        </TouchableOpacity>
        }
        />
    </View>
);
};