import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

class PantallaConCirculo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding}>
        <View style={styles.logoContainerP}>
          <Image
            source={require('../assets/logo.png')} // Ruta del asset logo.png
            style={[styles.logo, { tintColor: 'white' }]}
          />
          <Text style={styles.textoLogoP}>banco</Text>
        </View>
        <Text style={styles.texto}>Muchas gracias!</Text>
        <Text style={styles.texto}>Creemos que tienes un perfil.</Text>
        <Text style={styles.texto}>  </Text>
        <View style={styles.circulo}>
          <Image
            source={require('../assets/investor.png')} // Ruta del asset avatar.png
            style={styles.avatar}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')} // Ruta del asset logo.png
            style={[styles.logoA, { tintColor: 'white' }]}
          />
          <Text style={styles.textoLogo}>Investor</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text style={styles.buttonText}>Ir a Dashboard</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainerP: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinear contenido a la izquierda
    alignSelf: 'flex-start', // Alinear el contenedor a la izquierda
    marginBottom: 100, // Espacio entre el contenedor y el siguiente elemento
    marginRight: 250,

  },

  circulo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#2E94DC', // Color del círculo
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Espacio entre el círculo y la imagen
  },
  avatar: {
    width: 130,
    height: 130,
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento según tus necesidades
  },
  logo: {
    width: 70,
    height: 30,
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento según tus necesidades
  },
  logoA: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento según tus necesidades
  },
  texto: {
    color: 'white', // Color del texto
    fontSize: 20, // Tamaño de la fuente
    marginBottom: 20,
    justifyContent: "start"
  },
  textoLogo: {
    color: 'white',
    fontSize: 40,
    marginLeft: 10, // Espacio entre la imagen y el texto
    fontStyle: 'italic',
    
  },

  textoLogoP: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10, // Espacio entre la imagen y el texto
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#2E94DC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default PantallaConCirculo;




