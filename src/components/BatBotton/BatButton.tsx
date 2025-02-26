import React, {useState} from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatBotton() {
    const [pass, setpass] = useState('')

    function handleGenerateButton(){
        let generatorToken = generatePass() 
        setpass(generatorToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatTextInput pass={pass}/>
        <Pressable
        onPress={handleGenerateButton}
        style={styles.button}>
        <Text style={styles.text}>🤖 Generator</Text>
        </Pressable>

        <Pressable
        onPress={handleCopyButton}
        style={styles.button}>
        <Text style={styles.text}>🤖 COPIAR</Text>
        </Pressable>
    </>
  );
}
