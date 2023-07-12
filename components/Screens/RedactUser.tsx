import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/AuthReducer';

const RedactUser = ({ navigation } : { navigation : any }) => {
  const user = useSelector((state:any) => state.user.User);
  const [username, setUsername] = useState('');
  const [firstname, setfirstname] = useState('');
  const dispatch = useDispatch();
  const handleRedact = () => {
    fetch(`https://dummyjson.com/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        firstName: firstname,
    })
  })
  .then(res => res.json())
  .then((data) => {
    dispatch(setUser(data));
    navigation.navigate('Profile');
  })
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Firstname"
        onChangeText={setfirstname}
        value={firstname}
      />
      <Button title="Redact" onPress={handleRedact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
  },
});

export default RedactUser;
