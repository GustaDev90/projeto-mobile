import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [req1, setReq1] = useState(false);
  const [req2, setReq2] = useState(false);
  const [req3, setReq3] = useState(false);

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

        <Text style={styles.error}>Adicione um e-mail válido</Text>

        <Text style={styles.labelSenha}>Senha</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          <AntDesign name="closecircleo" size={18} color="#555" />
        </View>

         <Text style={styles.error}>Crie uma senha </Text>
         <Text></Text>
         <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          <AntDesign name="closecircleo" size={18} color="#555" />
        </View>

        <Text style={styles.error}>Repita a senha</Text>

        <View style={styles.requisitos}>
        <TouchableOpacity 
            style={styles.requisito} 
            onPress={() => setReq1(!req1)}
          >
            <MaterialCommunityIcons
              name={req1 ? "checkbox-marked" : "checkbox-blank-outline"}
              size={20}
              color={req1 ? "#4CAF50" : "#222"}
            />
            
            <Text style={styles.requisitoTexto}>8 caracteres</Text>
            </TouchableOpacity>

          <TouchableOpacity 
            style={styles.requisito} 
            onPress={() => setReq2(!req2)}
          >
            <MaterialCommunityIcons
              name={req2 ? "checkbox-marked" : "checkbox-blank-outline"}
              size={20}
              color={req2 ? "#4CAF50" : "#222"}
            />
            <Text style={styles.requisitoTexto}>caracteres especiais</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.requisito} 
            onPress={() => setReq3(!req3)}
          >
            <MaterialCommunityIcons
              name={req3 ? "checkbox-marked" : "checkbox-blank-outline"}
              size={20}
              color={req3 ? "#4CAF50" : "#222"}
            />
            <Text style={styles.requisitoTexto}>números</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Criar conta</Text>
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