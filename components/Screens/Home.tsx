import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, RefreshControl, Button, StyleSheet, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/ProductsReducer';
import { Post } from '../Post';
import { Loading } from '../Loading';
import { addToCart } from '../Redux/CartReducer';

export const Home = ({ navigation } : {navigation: any}) => {
  const dispatch = useDispatch<any>();
  const  products  = useSelector((state: any) => state.products.Products)
  const  isLoading  = useSelector((state: any) => state.products.isLoading)
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    dispatch(fetchProducts());
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const filteredProducts = selectedCategory
    ? products.filter((product:any) => product.category === selectedCategory)
    : products;

  const handleCategorySelect = (category:any) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleBuy = (product: any) => {
    dispatch(addToCart({ ...product, quantity }));
    Alert.alert('Cart', 'Product added to cart');
  };

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <View>
      <FlatList
  data={categories}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        item === selectedCategory && styles.selectedCategoryButton,
      ]}
      onPress={() => handleCategorySelect(item)}
    >
      <Text
        style={[
          styles.categoryButtonText,
          item === selectedCategory && styles.selectedCategoryButtonText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item}
  horizontal
/>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SinglePost', { item })}
          >
            <Post product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  selectedCategoryButton: {
    backgroundColor: '#2196f3',
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#000',
  },
  selectedCategoryButtonText: {
    color: '#fff',
  },
});