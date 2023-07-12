import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Profile = ({ navigation } : { navigation : any }) => {
  const user = useSelector((state:any) => state.user.User);
  const Redact = () => {
    navigation.navigate('RedactUser');
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.text}>Username: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>First Name: {user.firstName}</Text>
      <Text style={styles.text}>Last Name: {user.lastName}</Text>
      <Text style={styles.text}>Gender: {user.gender}</Text>
      <Button title="Redact" onPress={Redact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Profile;
