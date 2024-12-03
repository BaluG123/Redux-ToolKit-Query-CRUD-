import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {deleteUser, updateUser} from '../redux/slice/userSlice';

const Users = ({navigation}) => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('addusers')}>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Add User
        </Text>
      </TouchableOpacity>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                  paddingVertical: 5,
                }}>
                <Text style={{fontSize: 20, color: 'red', marginLeft: 10}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 20, color: 'red', marginLeft: 10}}>
                  {item.email}
                </Text>
                <Text style={{fontSize: 20, color: 'red', marginLeft: 10}}>
                  {item.age}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteUser(index));
                  }}>
                  <Text>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('updateusers', {
                      item,
                      index,
                    })
                  }>
                  <Text>Edit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <View>
          <Text style={{color: 'red'}}>No User Found</Text>
        </View>
      )}
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userItem: {
    width: '20%',
    height: '20%',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
});
