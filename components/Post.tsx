import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const Post = ({ product, onPress } : { product:any, onPress:any }) => {
    const PostPress = () => {
      onPress(product)
    }

    return (
        <TouchableOpacity onPress={PostPress}>
            <View style={styles.container}>
                <Image source={{ uri: product.thumbnail }} style={styles.image} />
                <View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.desc}>{product.description}</Text>
                </View>      
            </View>
        </TouchableOpacity>   
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 12,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    desc: {
      flex: 1,
      justifyContent: 'center',
      width: 250,
    },
    
  });
