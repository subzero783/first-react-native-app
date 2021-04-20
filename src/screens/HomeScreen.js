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
            <Button
                style={styles.buttonStyle2} 
                title="Go to Counter Demo"
                onPress={()=> navigation.navigate('Counter')}
            />
            <Button
                style={styles.buttonStyle2} 
                title="Go to Color Demo"
                onPress={()=> navigation.navigate('Color')}
            />
            <Button
                style={styles.buttonStyle2} 
                title="Go to Square Demo"
                onPress={()=> navigation.navigate('Square')}
            />
            <Button
                style={styles.buttonStyle2} 
                title="Go to Text Demo"
                onPress={()=> navigation.navigate('Text')}
            />
            <Button
                style={styles.buttonStyle2} 
                title="Go to Box Demo"
                onPress={()=> navigation.navigate('Box')}
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
