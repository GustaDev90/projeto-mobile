import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { router } from "expo-router";

export default function Invite() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Diskômetro</Text>
    
        <Text style={styles.texto}>Acesse a plataforma.</Text>
        <TouchableOpacity style={styles.loginButton}  onPress={() => {
                            router.push("/screens/login");
                          }}>
          <Text>Login por e-mail</Text>
        </TouchableOpacity>
        <Text>ou</Text>
        <TouchableOpacity style={styles.googleButton}>
             <Image
             source={{
             uri: "https://static.vecteezy.com/system/resources/thumbnails/072/677/661/small/google-search-logo-icon-free-png.png",
            }}
            style={{ width: 20, height: 20}}
           />
          <Text>Login com Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton} onPress={() => {
                            router.push("/screens/cadastro");
                          }}>
          <Text style={styles.createText}> Não tem uma conta? Crie uma</Text>
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
    flex: 1,
    width: '80%',
    alignItems: 'center',
    paddingTop: '8%',
  },
  title: {
    fontSize: 44,
    fontWeight: '300',
  },
  logo: {
    fontSize: 46,
    fontWeight: "700",
    fontFamily: "monospace",
    paddingBottom: 20,
  },
  texto: {
    marginTop: '12%',
    marginBottom: '14%',
    fontSize: 16,
  },
  loginButton: {
    width: '75%',
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 20,
  },
  googleButton: {
    width: '60%',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop: 20,
    gap: 10,
    flexDirection: 'row'
  },
  createButton: {
    width: '100%',
    paddingVertical: 11,
    marginTop: '7%',
    borderRadius: 20,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: '#ffffff',
    fontSize: 12,
  },
});