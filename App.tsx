import React from 'react';
import { View, Alert, FlatList, Button } from 'react-native';
import { SinglePost } from './components/SinglePost';

interface Product {
  title: string
  description: string
  thumbnail: string
}

function App() {
  const [items, setItems] = React.useState<Product[]>([]);

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
        renderItem={({ item }) => <SinglePost product={item} />}
      />
    </View>
  );
}

export default App;