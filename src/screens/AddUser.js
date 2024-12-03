import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/slice/userSlice';

const Adduser = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();
  return (
    <View>
      <Text style={{marginLeft: 20}}>Adduser</Text>
      <TextInput
        style={[styles.input]}
        placeholder="enter name"
        placeholderTextColor={'black'}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="enter email"
        placeholderTextColor={'black'}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="enter age"
        placeholderTextColor={'black'}
        onChangeText={setAge}
        value={age}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(addUser({name, email, age}));
          navigation.goBack();
        }}>
        <Text style={styles.submitbutton}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Adduser;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  submitbutton: {
    width: '20%',
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 120,
  },
});
