import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return(
        <View style={styles.container}>
        <Text>Samerda Funciona!</Text>
        <StatusBar style="auto" />
        </View>
    )
    

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});