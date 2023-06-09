import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SinglePost = ({ product } : { product:any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.info}>Price: ${product.price}</Text>
      <Text style={styles.info}>Discount: {product.discountPercentage}%</Text>
      <Text style={styles.info}>Rating: {product.rating}</Text>
      <Text style={styles.info}>Stock: {product.stock}</Text>
      <Text style={styles.info}>Brand: {product.brand}</Text>
      <Text style={styles.info}>Category: {product.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 10,
  },
  info: {
    marginTop: 5,
  },
});