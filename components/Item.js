import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Item = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    padding: 15,
    backgroundColor: '#F9EACE',
    borderRadius: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});
