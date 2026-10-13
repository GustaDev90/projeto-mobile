import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginEmail() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Endereço de E-mail</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <AntDesign name="closecircleo" size={18} color="#555" />
        </View>

        <Text style={styles.error}>Adicione seu email</Text>

        <Text style={styles.labelSenha}>Senha</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
          



          <AntDesign name="closecircleo" size={18} color="#555" />
        </View>

        
         <Text style={styles.error}>Adicione sua senha </Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.MudarSenha}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  content: {
    width: '80%',
    paddingTop: '45%',
  },

  label: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  labelSenha: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 16,
  },

  inputContainer: {
    width: '100%',
    height: 41,
    backgroundColor: '#e7e1e9',

    borderBottomWidth: 1,
    borderBottomColor: '#888',

    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 13,
    paddingRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 0,
  },

  error: {
    fontSize: 10,
    color: '#555',
    marginTop: 4,
  },

  requisitos: {
    marginTop: 25,
  },

  requisito: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  requisitoTexto: {
    fontSize: 19,
    marginLeft: 10,
  },

  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#000000',
    borderRadius: 22,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 25,
  },

  loginText: {
    color: '#ffffff',
    fontSize: 16,
  },

  MudarSenha: {
    alignItems: 'center',
    marginTop: 15,
  },

  forgotText: {
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});