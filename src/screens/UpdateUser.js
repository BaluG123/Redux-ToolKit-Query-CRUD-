import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from '../redux/slice/userSlice';

const UpdateUser = ({navigation, route}) => {
  console.log(route.params.item.name, '##');
  const [name, setName] = useState(route.params.item.name);
  const [email, setEmail] = useState(route.params.item.email);
  const [age, setAge] = useState(route.params.item.age);
  const dispatch = useDispatch();
  return (
    <View>
      {/* <Text style={{marginLeft: 20}}>Adduser</Text> */}
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
          dispatch(
            updateUser({index: route.params.index, data: {name, email, age}}),
          );
          navigation.goBack();
        }}>
        <Text style={styles.submitbutton}>UpdateUserData</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateUser;
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
