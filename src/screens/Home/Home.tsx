import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles';

export default function Home({ navigation}: any) {

function navform(){
  navigation.navigate('form');
}

    return(
        <View style={styles.appContainer}>

          <View style={styles.logoContainer}>
          <Image source={require("../../../img/Imagem250.svg")} />
        </View>

        <TouchableOpacity style={styles.button} onPress={navform}>
            <Text style={styles.buttonText}>Active Bat Signal</Text>
          </TouchableOpacity>
          
          <StatusBar style="auto" />
        <StatusBar style="light" />
        </View>
    )
    

}