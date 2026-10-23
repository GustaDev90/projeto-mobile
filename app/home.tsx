import CarrosselJogos from "./components/CarroselJogos";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Button } from "react-native-paper";
import Header from "./components/Header";
import { router } from "expo-router";

const imagemJogo =
  "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23U6X8/c59051d30a9b48d48f98c793c83bb9b2.png/f/resident-evil-9-requiem.png";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [pesquisa, setPesquisa] = useState("");
  const { width } = useWindowDimensions();

  const desktop = width >= 800;

  const produtos = [
    {
      id: "1",
      nome: "Resident Evil Requiem",
      preco: "R$ 279,90",
      loja: "Amazon",
      imagem: imagemJogo,
    },
    {
      id: "2",
      nome: "Resident Evil Requiem",
      preco: "R$ 289,90",
      loja: "Kabum",
      imagem: imagemJogo,
    },
  ];

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeContainer}
      >
        <CarrosselJogos/>
        {/* PRODUTO EM DESTAQUE */}
        <View
          style={[
            styles.featuredCard,
            desktop
              ? styles.featuredDesktop
              : styles.featuredMobile,
          ]}
        >
          <View
            style={[
              styles.featuredVisual,
              desktop
                ? styles.featuredVisualDesktop
                : styles.featuredVisualMobile,
            ]}
          >
            <Image
              source={{ uri: imagemJogo }}
              style={styles.featuredImage}
              resizeMode="contain"
            />


            <Text style={styles.visualPlatform}>
              PLAYSTATION 5
            </Text>
          </View>

          <View style={styles.featuredInfo}>
            <Text style={styles.eyebrow}>
              EM DESTAQUE · 01 / 03
            </Text>

            <Text style={styles.productTitle}>
              Resident Evil{" "} 
              <Text style={styles.greenTitle}>Requiem</Text>
            </Text>
            

            <View style={styles.tags}>
              <Text style={styles.tag}>PS5</Text>
              <Text style={styles.tag}>Mídia física</Text>
            </View>

            <View
              style={[
                styles.priceRow,
                !desktop && styles.priceRowMobile,
              ]}
            >
              <Button
                mode="contained"
                buttonColor="#191917"
                textColor="#FFFFFF"
                style={styles.button}
                contentStyle={styles.buttonContent}
                onPress={() => router.push("/screens/product")}
              >
                Ver produto ↗
              </Button>

              <View>
                <Text style={styles.from}>a partir de</Text>
                <Text style={styles.price}>R$ 279,90</Text>
              </View>
            </View>

            <Text style={styles.cardStore}>
              Disponível na Amazon
            </Text>
          </View>
        </View>

        {/* CONTROLE VISUAL DO DESTAQUE */}
        <View style={styles.featuredControls}>
          <View style={styles.progressTrack}>
            <View style={styles.progress} />
          </View>

          <Text style={styles.counter}>01 / 03</Text>
        </View>

        {/* PRODUTOS RECOMENDADOS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionHeading}>
              <Text style={styles.eyebrow}>
                ESCOLHAS DA COMUNIDADE
              </Text>

              <Text style={styles.sectionTitle}>
                {pesquisa ? "Resultados da busca" : "Em destaque"}
              </Text>

              <Text style={styles.sectionDescription}>
                {pesquisa
                  ? `${produtosFiltrados.length} produto(s) encontrado(s)`
                  : "Alguns jogos para começar sua busca."}
              </Text>
            </View>
          </View>

          <View style={styles.productsGrid}>
            {produtosFiltrados.map((produto) => (
              <View
                key={produto.id}
                style={[
                  styles.productCard,
                  {
                    width: desktop ? "23.5%" : "47%",
                  },
                ]}
              >
                <View style={styles.productImageContainer}>
                  <Image
                    source={{ uri: produto.imagem }}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.cardTitle}>
                    {produto.nome}
                  </Text>

                  <Text style={styles.cardPlatform}>
                    PS5 · Mídia física
                  </Text>

                  <Text style={styles.cardPrice}>
                    {produto.preco}
                  </Text>

                  <Text style={styles.cardStore}>
                    {produto.loja}
                  </Text>

                  <Button
                    mode="contained"
                    buttonColor="#191917"
                    textColor="#FFFFFF"
                    style={styles.smallButton}
                    contentStyle={styles.smallButtonContent}
                    labelStyle={styles.smallButtonText}
                    onPress={() => router.push("/screens/product")}
                  >
                    Ver produto
                  </Button>
                </View>
              </View>
            ))}
          </View>

          {produtosFiltrados.length === 0 && (
            <Text style={styles.emptyText}>
              Nenhum produto encontrado.
            </Text>
          )}
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    flex: 1,
  },

  homeContainer: {
    width: "100%",
    maxWidth: 1400,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 30,
  },

  featuredCard: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 18,
    backgroundColor: "#F4F4EF",
  },

  featuredDesktop: {
    flexDirection: "row",
    minHeight: 350,
  },

  featuredMobile: {
    flexDirection: "column",
  },

  featuredVisual: {
    backgroundColor: "#432D23",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
  },

  featuredVisualDesktop: {
    width: "45%",
    minHeight: 350,
  },

  featuredVisualMobile: {
    width: "100%",
    height: 240,
  },

  featuredImage: {
    width: "100%",
    height: "80%",
  },

  visualLabel: {
    position: "absolute",
    top: 18,
    left: 18,
    right: 18,
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  visualPlatform: {
    position: "absolute",
    bottom: 18,
    left: 18,
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  featuredInfo: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 28,
  },

  eyebrow: {
    color: "#85857A",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2,
  },

  productTitle: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "400",
    color: "#252521",
    marginTop: 14,
  },

  greenTitle: {
    color: "#8a0808",
  },

  description: {
    fontSize: 12,
    lineHeight: 20,
    color: "#85857B",
    marginTop: 14,
    marginBottom: 15,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  tag: {
    fontSize: 9,
    color: "#73736A",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#DFDFD7",
    borderRadius: 18,
    overflow: "hidden",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 22,
  },

  priceRowMobile: {
    alignItems: "flex-start",
  },

  button: {
    borderRadius: 9,
  },

  buttonContent: {
    minHeight: 40,
    paddingHorizontal: 6,
  },

  from: {
    fontSize: 9,
    color: "#85857B",
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#252521",
    marginTop: 3,
  },

  featuredControls: {
    height: 62,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressTrack: {
    height: 2,
    width: 135,
    backgroundColor: "#E7E7DF",
  },

  progress: {
    width: "34%",
    height: 2,
    backgroundColor: "#92A443",
  },

  counter: {
    fontSize: 10,
    color: "#77776F",
  },

  section: {
    borderTopWidth: 1,
    borderTopColor: "#EEEEEA",
    paddingTop: 34,
    width: "100%",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  sectionHeading: {
    gap: 5,
  },

  sectionTitle: {
    color: "#292925",
    fontSize: 25,
    fontWeight: "500",
    marginTop: 8,
  },

  sectionDescription: {
    color: "#88887F",
    fontSize: 12,
    marginTop: 3,
  },

  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 14,
  },

  productCard: {
    flexGrow: 0,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E9E9E2",
    backgroundColor: "#FFFFFF",
  },

  productImageContainer: {
    height: 180,
    padding: 10,
    backgroundColor: "#F2F2ED",
    alignItems: "center",
    justifyContent: "center",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  productInfo: {
    padding: 13,
  },

  cardTitle: {
    color: "#292925",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 21,
  },

  cardPlatform: {
    color: "#88887F",
    fontSize: 10,
    marginTop: 7,
  },

  cardPrice: {
    color: "#292925",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
  },

  cardStore: {
    color: "#88887F",
    fontSize: 11,
    marginTop: 5,
  },

  smallButton: {
    marginTop: 12,
    borderRadius: 8,
  },

  smallButtonContent: {
    minHeight: 38,
  },

  smallButtonText: {
    fontSize: 12,
  },

  emptyText: {
    color: "#77776F",
    textAlign: "center",
    paddingVertical: 30,
  },

  bottomSpace: {
    height: 30,
  },
});
