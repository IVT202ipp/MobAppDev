import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/CartReducer';
import { Post } from '../Post';



export const Checkout = ({ navigation, route } : { navigation : any, route : any } ) => {
    const { totalPrice } = route.params;
    const dispatch = useDispatch();
    const handleCompletePurchase = () => {
      navigation.navigate('Home');
    };
  
    return (
      <View>
        <Text>Total Price: {totalPrice}$</Text>
        <Button title="Buy Now" onPress={handleCompletePurchase} />
      </View>
    );
  };
  