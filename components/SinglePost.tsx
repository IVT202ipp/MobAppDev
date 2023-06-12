import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';

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
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.info}>Price: ${product.price}</Text>
      <Text style={styles.info}>Discount: {product.discountPercentage}%</Text>
      <Text style={styles.info}>Rating: {product.rating}</Text>
      <Text style={styles.info}>Stock: {product.stock}</Text>
      <Text style={styles.info}>Brand: {product.brand}</Text>
      <Text style={styles.info}>Category: {product.category}</Text>
      <FlatList
        data={product.images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <Button title="Back" onPress={onBackPress} />
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
    fontSize: 15,
    justifyContent: 'center',
  },
  info: {
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