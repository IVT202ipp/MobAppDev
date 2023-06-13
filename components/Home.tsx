import React from 'react';
import { View, Alert, FlatList, TouchableOpacity } from 'react-native';
import { Post } from './Post';


export const Home = ({ navigation }) => {
const [items, setItems] = React.useState([]);

const fetchPosts = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then(({ products }) => {
        setItems(products);
    })
    .catch((err) => {
        console.log(err);
        Alert.alert('Error', 'Unable data');
    });
};

React.useEffect(fetchPosts, []);

return (
    <View>
        <FlatList
        data={items}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('SinglePost', { item })}>
            <Post product = {item}/>
        </TouchableOpacity>
        }
        />
    </View>
);
}