
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const marketplaces = [
  {
    id: "1",
    nome: "Amazon",
    descricao: "Jogos novos e usados",
    imagem: {
      uri: "https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    },
  },
  {
    id: "2",
    nome: "Mercado Livre",
    descricao: "Ofertas de vendedores",
    imagem: {
      uri: "https://cdn.iconscout.com/icon/free/png-256/free-mercado-livre-icon-svg-download-png-14549372.png",
    },
  },
  {
    id: "3",
    nome: "Casas Bahia",
    descricao: "Produtos e promoções",
    imagem: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_slBJcDuC15d0nXnrwUHfYMwQUOSvoJlvj8z5mFfTcmqGcAtaFXUHDco&s=10",
    },
  },
  {
    id: "4",
    nome: "OLX",
    descricao: "Produtos de segunda mão",
    imagem: {
      uri: "https://logopng.com.br/logos/olx-104.png",
    },
  },
  {
    id: "5",
    nome: "Magalu",
    descricao: "Ofertas internacionais",
    imagem: {
      uri: "https://download.logo.wine/logo/AliExpress/AliExpress-Logo.wine.png",
    },
  },
];

export default function Marketplaces() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const { width } = useWindowDimensions();

  const colunas = width >= 1000 ? 3 : width >= 600 ? 2 : 1;

  const filtrados = marketplaces.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />

      <FlatList
        key={colunas}
        data={filtrados}
        keyExtractor={(item) => item.id}
        numColumns={colunas}
        contentContainerStyle={styles.lista}
        columnWrapperStyle={
          colunas > 1 ? styles.linha : undefined
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.introducao}>
            <Text style={styles.eyebrow}>
              COMPRE COMPARANDO
            </Text>

            <Text style={styles.titulo}>
              Nossos{" "}
              <Text style={styles.tituloVerde}>marketplaces</Text>
            </Text>

            <Text style={styles.subtitulo}>
              Explore as lojas disponíveis e encontre opções para
              comparar preços de jogos físicos em um só lugar.
            </Text>

            <View style={styles.contagem}>
              <View style={styles.pontoVerde} />
              <Text style={styles.contagemTexto}>
                {filtrados.length} lojas disponíveis
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum marketplace encontrado.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardTopo}>
              <View style={styles.imagem}>
                <Image
                  source={item.imagem}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.selo}>
                <Text style={styles.seloTexto}>LOJA</Text>
              </View>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.descricao}>
                {item.descricao}
              </Text>

              <View style={styles.cardRodape}>
                <Text style={styles.cardRodapeTexto}>
                  Marketplace
                </Text>

                <Text style={styles.seta}>↗</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  lista: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
  },

  introducao: {
    marginBottom: 28,
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#85857B",
  },

  titulo: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "500",
    color: "#282823",
    marginTop: 10,
  },

  tituloVerde: {
    color: "#899B43",
  },

  subtitulo: {
    maxWidth: 550,
    fontSize: 13,
    lineHeight: 21,
    color: "#85857B",
    marginTop: 10,
  },

  contagem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },

  pontoVerde: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#899B43",
  },

  contagemTexto: {
    color: "#77776F",
    fontSize: 11,
  },

  linha: {
    gap: 16,
    marginBottom: 16,
  },

  card: {
    flex: 1,
    minWidth: 0,
    marginBottom: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E9E9E2",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },

  cardTopo: {
    height: 175,
    backgroundColor: "#F3F3ED",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  imagem: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "85%",
    height: "85%",
  },

  selo: {
    position: "absolute",
    top: 12,
    right: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DFDFD6",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  seloTexto: {
    fontSize: 8,
    letterSpacing: 1,
    color: "#77776F",
    fontWeight: "700",
  },

  cardInfo: {
    padding: 16,
  },

  nome: {
    fontSize: 17,
    fontWeight: "600",
    color: "#292925",
  },

  descricao: {
    fontSize: 11,
    lineHeight: 17,
    color: "#85857B",
    marginTop: 6,
  },

  cardRodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 17,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEA",
  },

  cardRodapeTexto: {
    fontSize: 10,
    color: "#77776F",
  },

  seta: {
    fontSize: 17,
    color: "#899B43",
  },

  vazio: {
    paddingVertical: 30,
    textAlign: "center",
    color: "#77776F",
  },
});
