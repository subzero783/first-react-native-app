import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

    const navigateToComponents = () => {
        navigation.navigate('Components');
    };

    return (
        <View>
            <Text style={styles.text}>Hi there!</Text>
            <Button 
                onPress={navigateToComponents}
                title="Go to Components Demo" 
            />
            <Button
                style={styles.buttonStyle2} 
                title="Go to List Demo"
                onPress={()=> navigation.navigate('List')}
            />
            <Button
                style={styles.buttonStyle2} 
                title="Go to Image Demo"
                onPress={()=> navigation.navigate('Image')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 10
  },
  buttonStyle2: {
    paddingTop: 100
  }
});



export default HomeScreen;
