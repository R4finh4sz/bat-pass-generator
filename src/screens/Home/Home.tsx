import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatBotton } from '../../components/BatBotton/BatButton';

export default function Home() {
    return(
        <View style={styles.appContainer}>

          <View style={styles.logoContainer}>
        <BatLogo/>
        </View>

        <View style={styles.inputContainer}>
          <BatBotton/>
        </View>
        <StatusBar style="light" />
        </View>
    )
    

}