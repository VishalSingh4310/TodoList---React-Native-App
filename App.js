import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import Search from './components/Search';
import List from './components/List';

const {height, width} = Dimensions.get('window');

const dummyData = [
  {
    id: 1,
    text: 'Knockout',
  },
  {
    id: 2,
    text: 'Summer',
  },
  {
    id: 3,
    text: 'Study',
  },
  {
    id: 4,
    text: 'Riding',
  },
  {
    id: 5,
    text: 'Movies',
  },
];

const App = () => {
  const [textData, setTextData] = React.useState(dummyData);
  const [permData, setPermData] = React.useState(dummyData);

  const addData = text => {
    console.log(text);
    if (text !== '') {
      setTextData([
        ...permData,
        {
          id: Math.random() * (100 - 6) + 6,
          text: text,
        },
      ]);
      setPermData([
        ...permData,
        {
          id: Math.random() * (100 - 6) + 6,
          text: text,
        },
      ]);
    }
  };

  const filterData = text => {
    if (text !== '') {
      setTextData(
        permData.filter(item =>
          item.text.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setTextData(permData);
    }
  };

  return (
    <View style={styles.container}>
      <Search addData={addData} data={textData} filterData={filterData} />
      <List data={textData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
  },
});

export default App;
