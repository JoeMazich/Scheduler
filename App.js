import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const schedule = {
  title: "CS Courses for 2018-2019",
  author: "Joseph Mazich"
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Item1}>
        <Text style={styles.bannerStyle}>{schedule.title}</Text>
      </View>

      <View style={styles.Item2}>
        <Text style={styles.bannerStyle2}>{schedule.author}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Item1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  Item2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  bannerStyle: {
    color: '#FF0000',
    fontSize: 32,
  },
  bannerStyle2: {
    color: '#00FF00',
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default App;
