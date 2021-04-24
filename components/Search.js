import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Search = ({addData, data, filterData}) => {
  const [text, setText] = useState('');
  const [rippleOverflow, setRippleOverflow] = useState(false);

  const textHandler = inputData => {
    filterData(inputData);
    setText(inputData);
  };

  const addHandler = () => {
    setRippleOverflow(!rippleOverflow);
    addData(text);
    setText('');
  };

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={textHandler}
        placeholder="search"
        onSubmitEditing={addHandler}
      />
      <TouchableNativeFeedback
        onPress={addHandler}
        background={TouchableNativeFeedback.Ripple('#dbdbdbd', rippleOverflow)}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Add</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    elevation: 2,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 20,
  },
  btnContainer: {
    width: width * 0.2 - 5,
    backgroundColor: 'black',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnText: {
    color: 'white',
  },
});
