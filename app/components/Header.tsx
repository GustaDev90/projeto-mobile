import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";

export default function Header({ menuAberto, setMenuAberto }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuAberto(!menuAberto)}
        >
          <Text style={styles.menuIcon}>
            {menuAberto ? "✕" : "☰"}
          </Text>
        </TouchableOpacity>

        
        <Image
  source={require("../../assets/images/DiskoMetro.png")}
  style={styles.logo}
  resizeMode="contain"
/>

        <View style={styles.profilePic}>
          <TouchableOpacity  onPress={() => {
                    router.push("/screens/invite");
                  }}>
            <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png",
            }}
            style={styles.profile}
          />
          </TouchableOpacity>
        </View>
      </View>

      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuAberto(false);
              router.push("/home");
            }}
          >
            <Text style={styles.menuText}>Home</Text>
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
    position: "relative",
    zIndex: 1000,
    elevation: 1000,
  },

header: {
  width: "100%",
  paddingHorizontal: 20,
  paddingTop: 10,
  paddingBottom: 10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#05080D",
},

  menuButton: {
    width: 44,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  menuIcon: {
  fontSize: 28,
  fontWeight: "500",
  color: "#7DD3FC",
},


logo: {
  width: 260,
  height: 120,
},


  profile: {
    width: 44,
    height: 40,
    borderRadius: 22,
  },

  profilePic: {
  paddingBottom: 0,
},

  menu: {
    position: "absolute",
    top: 80,
    left: 15,
    width: 230,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    zIndex: 1001,
    elevation: 1001,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  menuText: {
    fontSize: 18,
  },
});
