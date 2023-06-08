import React from 'react';
import { View, Text, Alert, FlatList } from 'react-native';

function App() {
  const [items, setitems] = React.useState([]);

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

  React.useEffect(fetchPosts, []);

  const Post = ({ title, desc }: { title: any, desc: any }) => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Post title={item.title} desc={item.description} />}
      />
    </View>
  );
}

export default App;