import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const marketplaces = [
  {
    id: '1',
    nome: 'Amazon',
    imagem: {
      uri: 'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png',
    },
  },
  {
    id: '2',
    nome: 'Mercado Livre',
    imagem: {
      uri: 'https://cdn.iconscout.com/icon/free/png-256/free-mercado-livre-icon-svg-download-png-14549372.png',
    },
  },
  {
    id: '3',
    nome: 'Shopee',
    imagem: {
      uri: 'https://blog.caviarcriativo.com/wp-content/uploads/2025/11/Shopee-Png-Download.png',
    },
  },
  {
    id: '4',
    nome: 'OLX',
    imagem: {
      uri: 'https://logopng.com.br/logos/olx-104.png',
    },
  },
  {
    id: '5',
    nome: 'AliExpress',
    imagem: {
      uri: 'https://download.logo.wine/logo/AliExpress/AliExpress-Logo.wine.png',
    },
  },
];

export default function Marketplaces() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Marketplaces disponíveis no Diskômetro</Text>

      <FlatList
        data={marketplaces}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imagem}>
              <Image
                source={item.imagem}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },

  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  linha: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  card: {
    width: '48%',
    alignItems: 'center',
  },

  imagem: {
    width: '100%',
    aspectRatio: 0.85,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  logo: {
    width: '80%',
    height: '70%',
  },

  nome: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1,
  },
});