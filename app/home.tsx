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
        style={{ width: 350, alignSelf: "center" }}
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
    backgroundColor: "#fff",
    paddingTop: 20,
  },

  scroll: {
    flex: 1,
  },

  homeContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 30,
  },

  section: {
    width: "100%",
    marginBottom: 35,
  },

  sectionTitle: {
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "System",
    marginBottom: 20,
  },

  featuredCard: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 20,
    backgroundColor: "#fff",
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
    fontSize: 26,
    fontWeight: "500",
    fontFamily: "System",
    lineHeight: 32,
  },

  developer: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "System",
  },

  bold: {
    fontWeight: "700",
  },

  price: {
    fontSize: 30,
    fontFamily: "System",
    marginTop: 15,
  },

  installments: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: "System",
  },

  condition: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: "System",
  },

  stock: {
    fontSize: 16,
    marginTop: 4,
    color: "green",
    fontFamily: "System",
  },

  button: {
    width: "100%",
    marginTop: 20,
  },

  productsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  productCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
  },

  productImage: {
    width: "100%",
    height: 170,
    resizeMode: "contain",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "System",
    lineHeight: 23,
  },

  cardPrice: {
    fontSize: 22,
    marginTop: 10,
    fontFamily: "System",
  },

  cardStore: {
    fontSize: 15,
    marginTop: 5,
    color: "#666",
    fontFamily: "System",
  },

  smallButton: {
    width: "100%",
    marginTop: 15,
  },

  smallButtonText: {
    fontSize: 13,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  category: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
  },

  categoryText: {
    fontSize: 17,
    fontFamily: "System",
  },

  bottomSpace: {
    height: 30,
  },
});