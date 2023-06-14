import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartReducer';
import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Rate from './Rate';

export const SinglePost = ({ navigation, route }) => {
  const [selectedImage, setSelectedImage] = React.useState('');
  const { item } = route.params;

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(addToCart(item));
    Alert.alert('Cart', 'Product added to cart');
  };

  const renderImage = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => ImagePress(item)}>
        <Image
          source={{ uri: item }}
          style={[styles.image, item === selectedImage && styles.selectedImage]}
        />
      </TouchableOpacity>
    );
  };

  const ImagePress = (item) => {
    if (item === selectedImage) {
      setSelectedImage('');
    } else {
      setSelectedImage(item);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={item.images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <Text style={styles.info}>Rating: {item.rating}</Text>
      <Rate Rating={item.rating} />
      <Text style={styles.info}>Price: {item.price}$</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.info}>Discount: {item.discountPercentage}%</Text>
      <Text style={styles.info}>Stock: {item.stock}</Text>
      <Text style={styles.info}>Brand: {item.brand}</Text>
      <Text style={styles.info}>Category: {item.category}</Text>
      <Button title="Add to Cart" onPress={handleBuy} />
      <Button title="Back" onPress={goBack} />
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