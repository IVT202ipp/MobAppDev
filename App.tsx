import React from 'react';
import { View, Alert, FlatList, StyleSheet, Image } from 'react-native';
import { Post } from './components/Post';

interface Product {
  title: string
  description: string
  thumbnail: string
}

function App() {
  const [items, setitems] = React.useState<Product[]>([]);

  const fetchPosts = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(({ products }) => {
        setitems(products);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Unable data');
      });
  };
  fetch('https://dummyjson.com/products/categories')
  .then(res => res.json())
  .then(console.log);
              
  React.useEffect(fetchPosts, []);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Post title={item.title} desc={item.description} img={item.thumbnail} />}
      />
    </View>
  );
}

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

export default App;