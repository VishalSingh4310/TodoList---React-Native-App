import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Item from './Item';

const renderItem = data => {
  console.log(data);
  return <Item text={data.item.text} />;
};

const List = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.reverse()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    overflow: 'scroll',
    flex: 1,
  },
});
