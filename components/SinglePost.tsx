import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import Rate from './Rate';

export const SinglePost = ({ product, onBackPress }: { product: any, onBackPress: any }) => {
  const [selectedImage, setSelectedImage] = useState('');

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
      <Text style={styles.price}>{product.price}$</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      
      <Text style={styles.info}>Discount: {product.discountPercentage}%</Text>
      
      <Text style={styles.info}>Stock: {product.stock}</Text>
      <Text style={styles.info}>Brand: {product.brand}</Text>
      <Text style={styles.info}>Category: {product.category}</Text>   
      <Button title="Back" onPress={onBackPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 15,
    justifyContent: 'center',
  },
  info: {
    marginTop: 5,
  },
  price: {
    fontSize: 20,
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