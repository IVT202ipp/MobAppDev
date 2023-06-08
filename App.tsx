import React from 'react';
import { View, Text, Alert, FlatList, StyleSheet, Image } from 'react-native';

function App() {
  const [items, setitems] = React.useState([]);

  const fetchPosts = () => {
    fetch('https://dummyjson.com/products/category/smartphones')
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

  const Post = ({ title, desc, img }: { title: any, desc: any, img: any }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: img }} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>      
      </View>
    );
  };

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