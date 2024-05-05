import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ConfettiCannon  from 'react-native-confetti-cannon';

class PantallaConCirculo extends React.Component {

  state = {
    showConfetti: false,
  };

  componentDidMount() {
    this.setState({ showConfetti: true });

    setTimeout(() => {
      this.setState({ showConfetti: false });
    }, 5000);
  }

  render() {
    const { showConfetti } = this.state;
    const { total } = this.props.route.params;

    const definedProfile =
      total === 1
        ? "Básico"
        : total === 2
        ? "Límite"
        : total === 3
        ? "Inversión"
        : "Undefined";

    const avatarObject = {
      Básico: require('../assets/manprofileaccount.jpg'),
      Límite: require('../assets/blondemanwithsunglasses.jpg'),
      Inversión: require('../assets/womenprofileaccount.jpg'),
    };

    const avatarImg = avatarObject[definedProfile];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.padding}>
          <View style={styles.logoContainerP}>
            <Image
              source={require('../assets/logo.png')} // Ruta del asset logo.png
              style={[styles.logo, { tintColor: "white" }]}
            />
            <Text style={styles.textoLogoP}>{definedProfile}</Text>
          </View>
          <View style = {{width: "100%", gap: 30}}>
          <Text style={styles.textoLogo2} numberOfLines={3}>¡Muchas gracias por contestar!</Text>
          <Text style={styles.texto} numberOfLines={4}>Creemos que tienes un perfil:</Text>
          </View>
          <Text style={styles.texto}> </Text>
          <View style={styles.circulo}>
            <Image
              source={avatarImg} // Ruta del asset avatar.png
              style={styles.avatar}
            />
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo.png")} // Ruta del asset logo.png
              style={[styles.logoA, { tintColor: "white" }]}
            />
            <Text style={styles.textoLogo}>{definedProfile}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Dashboard", {
              profile: definedProfile
            })}
          >
            <Text style={styles.buttonText}>Ir a Dashboard</Text>
          </TouchableOpacity>
          
        </View>
        {showConfetti && (
          <ConfettiCannon
            count={200}
            origin={{ x: -10, y: 0 }}
            explosionSpeed={350}
            fallSpeed={3000}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  padding: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainerP: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start", // Alinear contenido a la izquierda
    alignSelf: "flex-start", // Alinear el contenedor a la izquierda
    marginBottom: 50, // Espacio entre el contenedor y el siguiente elemento
    marginRight: 160,
  },

  circulo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#2E94DC", // Color del círculo
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Espacio entre el círculo y la imagen
  },
  avatar: {
    width: 130,
    height: 130,
    resizeMode: "contain", // Ajusta el modo de redimensionamiento según tus necesidades
    borderRadius: 65, // Half of width and height
  overflow: 'hidden', // Ensure the image doesn't spill out of the border
  resizeMode: "cover", // Cover the entire view, might be cropped
  },
  logo: {
    width: 70,
    height: 30,
    resizeMode: "contain", // Ajusta el modo de redimensionamiento según tus necesidades
  },
  logoA: {
    width: 100,
    height: 100,
    resizeMode: "contain", // Ajusta el modo de redimensionamiento según tus necesidades
  },
  texto: {
    color: "white", // Color del texto
    fontSize: 24, // Tamaño de la fuente
    //marginBottom: 5,
    justifyContent: "flex-start",
    fontWeight: '200',
    width: "100%"
  },
  textoLogo: {
    color: "white",
    fontSize: 40,
    marginLeft: 10, // Espacio entre la imagen y el texto
    fontStyle: "italic",
  },

  textoLogo2: {
    color: "white",
    fontSize: 35,
    marginLeft: 0, // Espacio entre la imagen y el texto
    fontStyle: "italic",
  },

  textoLogoP: {
    color: "white",
    fontSize: 22,
    marginLeft: 4, // Espacio entre la imagen y el texto
    fontStyle: "normal",
    paddingBottom: 4
  },
  button: {
    color: "black",
    backgroundColor: "#B8860B",
    borderRadius: 25,
    width: 200,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default PantallaConCirculo;
