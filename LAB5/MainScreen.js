import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  BackHandler,
  ScrollView,
} from "react-native";

const banhCanhImage = require("./assets/banhcanh.jpg");
const chaoLuonImage = require("./assets/chaoluon.jpg");
const phoBoImage = require("./assets/pho.jpg");

function MainScreen({ navigation }) {
  const handleExitApp = () => {
    BackHandler.exitApp();
  };

  return (
    <ImageBackground
      source={require("./assets/mainscreen.jpg")}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Menu món ngon</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("BanhCanhScreen")}
          >
            <Image source={banhCanhImage} style={styles.foodImage} />
            <Text style={styles.menuItemText}>Bánh Canh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("ChaoLuonScreen")}
          >
            <Image source={chaoLuonImage} style={styles.foodImage} />
            <Text style={styles.menuItemText}>Cháo Lươn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("PhoBoScreen")}
          >
            <Image source={phoBoImage} style={styles.foodImage} />
            <Text style={styles.menuItemText}>Phở Bò</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exitButton} onPress={handleExitApp}>
            <Text style={styles.exitButtonText}>Thoát</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  menuItem: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: 250,
    alignItems: "center",
  },
  foodImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  menuItemText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  exitButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    width: 200,
    alignItems: "center",
  },
  exitButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MainScreen;
