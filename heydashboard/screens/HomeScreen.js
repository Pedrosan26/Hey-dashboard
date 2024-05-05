// HomeScreen.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={require("../assets/logo.png")} // Asegúrate de que la ruta sea correcta
          style={[styles.logo, { tintColor: "white" }]} // Invertir el color de la imagen
        />
        <Text
          style={{
            color: "white",
            margin: 3,
            fontStyle: "italic",
            fontSize: 24,
            paddingBottom: 5,
          }}
        >
          banco
        </Text>
      </View>
      <View style={styles.appcontainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.welcometext}>Bienvenido a </Text>
          <Text style={styles.italictextwelcome}>tú</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "baseline",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginTop: 10,
            gap: 4,
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={[
              {
                marginTop: 20,
                tintColor: "white",
                resizeMode: "contain",
                width: 130,
                height: 50,
              },
            ]}
          />
          <Text
            style={{
              color: "white",
              margin: 3,
              fontStyle: "italic",
              fontSize: 45,
              paddingBottom: 7,
                fontWeight: '300'
            }}
          >
            dashboard
          </Text>
        </View>

        <Pressable
          style={styles.HomeButton}
          onPress={() => navigation.navigate("Encuesta")}
        >
          <Text style = {{fontSize: 20}}>Iniciar</Text>
        </Pressable>

        <Pressable
          style={styles.HomeButton}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style = {{fontSize: 20}}>ivan</Text>
        </Pressable>

        <Pressable
          style={styles.HomeButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style = {{fontSize: 20}}>pito</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  logo: {
    width: 70,
    height: 30,
    resizeMode: "contain",
  },

  imagecontainer: {
    flex: 1,
    alignItems: "baseline",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
    gap: 4,
  },

  appcontainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginBottom: 300,
  },

  welcometext: {
    color: "white",
    fontSize: 32,
  },

  italictextwelcome: {
    color: "white",
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "200",
  },

  text: {
    color: "white",
  },

  HomeButton: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 15,
    width: 270,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
