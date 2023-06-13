import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import Rate from './Rate';

export const SinglePost = ({ route }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const { product } = route.params;
  
  const renderImage = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity onPress={() => ImagePress(item)}>
        <Image
          source={{ uri: item }}
          style={[styles.image, item === selectedImage && styles.selectedImage]}
        />
      </TouchableOpacity>
    );
  };

  const ImagePress = (item: string) => {
    if (item === selectedImage) {
      setSelectedImage('');
    } else {
      setSelectedImage(item);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product.images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <Text style={styles.info}>Rating: {product.rating}</Text>
      <Rate Rating={product.rating} />
      <Text style={styles.info}>Price: {product.price}$</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>      
      <Text style={styles.title}>Details</Text>
      <Text style={styles.info}>Discount: {product.discountPercentage}%</Text>
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
  details: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 17,
    justifyContent: 'center',
  },
  info: {
    fontSize: 18,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 12,
  },
  selectedImage: {
    width: 300,
    height: 300,
  },
});