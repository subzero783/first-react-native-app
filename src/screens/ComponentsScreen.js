import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {

    const greeting = <Text>Hello to you!</Text>;
    const myName = 'Gustavo Amezcua';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.textStyle2}>{`My name is ${myName}`}</Text>
        </View>
    );
}; 

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
  });

export default ComponentsScreen;