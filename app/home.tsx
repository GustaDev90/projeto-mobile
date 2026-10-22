import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import Header from "./components/Header";
import { router } from "expo-router";
import { Searchbar } from "react-native-paper";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
      />

      <Searchbar
        placeholder="Pesquise seu jogo"
        style={styles.search}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.homeContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Produto em destaque
          </Text>

          <View style={styles.featuredCard}>
            <Image
              source={{
                uri: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23U6X8/c59051d30a9b48d48f98c793c83bb9b2.png/f/resident-evil-9-requiem.png",
              }}
              style={styles.featuredImage}
            />

            <View style={styles.featuredInfo}>
              <Text style={styles.productTitle}>
                Resident Evil Requiem - PS5
              </Text>

              <Text style={styles.price}>
                R$ 279,90
              </Text>

              <Text style={styles.cardStore}>
                Amazon
              </Text>

              <Text style={styles.installments}>
                em até 10x R$ 30,09
              </Text>

              <Text style={styles.condition}>
                Novo
              </Text>

              <Text style={styles.stock}>
                Em estoque
              </Text>

              <Button
                mode="contained"
                buttonColor="black"
                style={styles.button}
                onPress={() => {
                  router.push("/screens/product");
                }}
              >
                Ver produto
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Recomendado para você
          </Text>

          <View style={styles.productsGrid}>
            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23U6X8/c59051d30a9b48d48f98c793c83bb9b2.png/f/resident-evil-9-requiem.png",
                }}
                style={styles.productImage}
              />

              <Text style={styles.cardTitle}>
                Resident Evil Requiem
              </Text>

              <Text style={styles.cardPrice}>
                R$ 279,90
              </Text>

              <Text style={styles.cardStore}>
                Amazon
              </Text>

              <Button
                mode="contained"
                buttonColor="black"
                style={styles.smallButton}
                labelStyle={styles.smallButtonText}
                onPress={() => {
                  router.push("/screens/product");
                }}
              >
                Ver produto
              </Button>
            </View>

            <View style={styles.productCard}>
              <Image
                source={{
                  uri: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23U6X8/c59051d30a9b48d48f98c793c83bb9b2.png/f/resident-evil-9-requiem.png",
                }}
                style={styles.productImage}
              />

              <Text style={styles.cardTitle}>
                Resident Evil Requiem
              </Text>

              <Text style={styles.cardPrice}>
                R$ 289,90
              </Text>

              <Text style={styles.cardStore}>
                Kabum
              </Text>

              <Button
                mode="contained"
                buttonColor="black"
                style={styles.smallButton}
                labelStyle={styles.smallButtonText}
                onPress={() => {
                  router.push("/screens/product");
                }}
              >
                Ver produto
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05080D",
    paddingTop: 0,
  },

  search: {
    width: "90%",
    maxWidth: 600,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ffffff",
  },

  scroll: {
    flex: 1,
  },

 homeContainer: {
  alignItems: "center",
  paddingHorizontal: 30,
  paddingTop: 30,
  paddingBottom: 30,
  width: "100%",
  maxWidth: 1400,
  alignSelf: "center",
},

section: {
  width: "100%",
  marginBottom: 35,
},

search: {
  width: "95%",
  maxWidth: 900,
  alignSelf: "center",
  marginTop: 20,
  marginBottom: 10,
  backgroundColor: "#151D2B",
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#ffffff",
},

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "System",
    marginBottom: 20,
    color: "#ffffff",
  },

  featuredCard: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#26384D",
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#111827",
    marginBottom: 20,
  },

  featuredImage: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
    marginBottom: 20,
  },

  featuredInfo: {
    width: "100%",
  },

  productTitle: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "System",
    lineHeight: 32,
    color: "#F1F5F9",
  },

  developer: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "System",
    color: "#CBD5E1",
  },

  bold: {
    fontWeight: "700",
  },

  price: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "System",
    marginTop: 15,
    color: "#ffffff",
  },

  installments: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: "System",
    color: "#CBD5E1",
  },

  condition: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: "System",
    color: "#CBD5E1",
  },

  stock: {
    fontSize: 16,
    marginTop: 4,
    color: "#4ADE80",
    fontFamily: "System",
  },

  button: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
  },

  productsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },

  productCard: {
    flex: 1,
    minWidth: 140,
    borderWidth: 1,
    borderColor: "#26384D",
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#111827",
  },

  productImage: {
    width: "100%",
    height: 170,
    resizeMode: "contain",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "System",
    lineHeight: 23,
    color: "#F1F5F9",
  },

  cardPrice: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    fontFamily: "System",
    color: "#ffffff",
  },

  cardStore: {
    fontSize: 15,
    marginTop: 5,
    color: "#94A3B8",
    fontFamily: "System",
  },

  smallButton: {
    width: "100%",
    marginTop: 15,
    borderRadius: 8,
  },

  smallButtonText: {
    fontSize: 13,
    color: "#FFFFFF",
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  category: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: "#111827",
  },

  categoryText: {
    fontSize: 17,
    fontFamily: "System",
    color: "#ffffff",
  },

  bottomSpace: {
    height: 30,
  },
});
