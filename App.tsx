import React from 'react';
import { View, Alert, FlatList, Text } from 'react-native';
import { Post } from './components/Post';
import { SinglePost } from './components/SinglePost';

function App() {
  const [items, setItems] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

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

  const PostPress = (product) => {
    setSelectedProduct(product);
  };

  const BackPress = () => {
    setSelectedProduct(null);
  };

  return (
    <View>
      {selectedProduct ? (
        <SinglePost product={selectedProduct} onBackPress={BackPress}/>
      ) : (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Post product={item} onPress={PostPress} />
          )}
        />
      )}
    </View>
  );
}


export default App;