
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Searchbar } from "react-native-paper";
import { router } from "expo-router";

export default function Header({
  menuAberto,
  setMenuAberto,
  pesquisa,
  setPesquisa,
}) {
  const { width } = useWindowDimensions();
  const desktop = width >= 950;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {!desktop && (
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuAberto(!menuAberto)}
          >
            <Text style={styles.menuIcon}>
              {menuAberto ? "✕" : "☰"}
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Image
            source={require("../../assets/images/DiskoMetro.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {desktop && (
          <Searchbar
            placeholder="Pesquisar jogos físicos..."
            value={pesquisa}
            onChangeText={setPesquisa}
            style={styles.search}
            inputStyle={styles.searchInput}
            iconColor="#77776F"
            elevation={0}
          />
        )}

        {desktop ? (
          <View style={styles.navigation}>
            <TouchableOpacity onPress={() => router.push("/home")}>
              <Text style={styles.navText}>Início</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/screens/marketplaces")}
            >
              <Text style={styles.navText}>Marketplaces</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPesquisa("")}
            >
              <Text style={styles.navText}>Pesquisar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/screens/invite")}
            >
              <Text style={styles.navText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => router.push("/screens/invite")}
            >
              <Text style={styles.registerText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => router.push("/screens/invite")}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png",
              }}
              style={styles.profile}
            />
          </TouchableOpacity>
        )}
      </View>

      {!desktop && (
        <View style={styles.mobileSearch}>
          <Searchbar
            placeholder="Pesquisar jogos físicos..."
            value={pesquisa}
            onChangeText={setPesquisa}
            style={styles.searchMobile}
            inputStyle={styles.searchInput}
            iconColor="#77776F"
            elevation={0}
          />
        </View>
      )}

      {menuAberto && !desktop && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuAberto(false);
              router.push("/home");
            }}
          >
            <Text style={styles.menuText}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuAberto(false);
              router.push("/screens/marketplaces");
            }}
          >
            <Text style={styles.menuText}>Marketplaces</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEA",
    zIndex: 1000,
    elevation: 4,
  },

  header: {
    minHeight: 58,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },

  logo: {
    width: 180,
    height: 100,
  },

  search: {
    flex: 1,
    maxWidth: 300,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#FAFAF8",
    marginRight: 1000,
    borderWidth: 1,
    borderColor: "#E6E6DF",
  },

  searchInput: {
    fontSize: 12,
    minHeight: 34,
  },

  navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  navText: {
    color: "#77776F",
    fontSize: 11,
  },

  registerButton: {
    borderWidth: 1,
    borderColor: "#33332F",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },

  registerText: {
    fontSize: 11,
    color: "#292925",
  },

  menuButton: {
    padding: 6,
  },

  menuIcon: {
    color: "#292925",
    fontSize: 25,
  },

  profile: {
    width: 32,
    height: 32,
  },

  mobileSearch: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  searchMobile: {
    height: 42,
    backgroundColor: "#FAFAF8",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E6E6DF",
  },

  menu: {
    position: "absolute",
    top: 56,
    left: 12,
    width: 230,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 8,
    zIndex: 1001,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 18,
  },

  menuText: {
    fontSize: 14,
    color: "#292925",
  },
});
