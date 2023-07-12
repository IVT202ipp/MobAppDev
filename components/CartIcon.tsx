import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const CartIcon = ({ navigation } : {navigation: any}) => {
  const cartItems = useSelector((state : any) => state.cart);

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity onPress={handleCartPress}>
      <View>
        <Text>Cart</Text>
        <Text>{cartItems.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;
