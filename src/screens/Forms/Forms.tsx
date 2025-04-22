import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import styles from '../Forms/Styles';

export default function FormScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [observation, setObservation] = useState("");

  function handleSubmit() {
    Alert.alert("Dados Enviados", `Nome: ${name}\nTelefone: ${phone}\nLocalização: ${location}\nObservação: ${observation}`);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../img/Imagem50.svg")} style={styles.logo} />

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Digite seu nome" />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Digite seu telefone" keyboardType="phone-pad" />

      <Text style={styles.label}>Localização Atual:</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Digite sua localização" />

      <Text style={styles.label}>Observação:</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        value={observation} 
        onChangeText={setObservation} 
        placeholder="Digite uma observação" 
        multiline 
        numberOfLines={4} 
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

