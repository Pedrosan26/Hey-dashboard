// Encuesta.js
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
import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function calculateProfile(r1, r2, r3) {
  const checkWeight = {
    Básico: 2,
    Límite: 1,
    Inversión: 3,
  };
}

export default function HomeScreen({ navigation }) {
  const [pregunta1, setPregunta1] = useState(null);
  const [pregunta2, setPregunta2] = useState(null);
  const [pregunta3, setPregunta3] = useState(null);
  const [result, setResult] = useState();

  const checkWeight = {
    Básico: 1,
    Límite: 2,
    Inversión: 3,
  };

  const handleSubmit = () => {
    if (pregunta1 === null || pregunta2 === null || pregunta3 === null) {
      alert("¡Hey! Falta llenar algún campo.");
      return;
    }

    var totalWeight = 0;

    totalWeight += checkWeight[pregunta1];
    totalWeight += checkWeight[pregunta2];
    totalWeight += checkWeight[pregunta3];
    const finalAvg = Math.round(totalWeight / 3);

    navigation.navigate('Perfil', { total: finalAvg });
  };
  return (
    <SafeAreaView
      style={[styles.container, { width: screenWidth, height: screenHeight }]}
    >
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
        <Text
          style={{
            color: "white",
            display: "flex",
            fontSize: 32,
            width: "65%",
            fontWeight: "200",
          }}
        >
          Comencemos con estas simples preguntas para conocerte más
        </Text>

        <View
          style={{
            display: "flex",
            alignItems: "start",
            marginTop: 30,
            gap: 20,
            justifyContent: "start",
          }}
        >
          <Text style={{ color: "white", fontSize: 15, width: "100%" }}>
            ¿Qué te interesa más sobre tu cuenta hey?
          </Text>
          <RNPickerSelect
            onValueChange={(value) => setPregunta1(value)}
            placeholder={{
              label: "Seleccione una opción",
              value: "Seleccione una opción",
            }}
            items={[
              { label: "Nada en específico", value: "Básico" },
              { label: "Me interesa visualizar mis gastos", value: "Límite" },
              {
                label: "Me interesa la parte de la inversión",
                value: "Inversión",
              },
            ]}
            style={pickerSelectStyles}
          />

          <Text style={{ color: "white", fontSize: 15, width: "100%" }}>
            ¿Cuál es tu fuente de ingresos principal?
          </Text>
          <RNPickerSelect
            onValueChange={(value) => setPregunta2(value)}
            placeholder={{
              label: "Seleccione una opción",
              value: "Seleccione una opción",
            }}
            items={[
              { label: "Soy asalariado o no tengo ingresos", value: "Básico" },
              { label: "Soy empresario", value: "Límite" },
              {
                label: "Soy inversionista",
                value: "Inversión",
              },
            ]}
            style={pickerSelectStyles}
          />

          <Text
            style={{
              color: "white",
              fontSize: 15,
              width: "100%",
              textAlign: "left",
            }}
          >
            ¿Cuál es tu objetivo con tu cuenta Hey?
          </Text>
          <RNPickerSelect
            onValueChange={(value) => setPregunta3(value)}
            placeholder={{
              label: "Seleccione una opción",
              value: "Seleccione una opción",
            }}
            items={[
              { label: "Nada en específico", value: "Básico" },
              { label: "Quiero un buen control de mis gastos", value: "Límite" },
              {
                label: "Me interesa invertir a través de Hey",
                value: "Inversión",
              },
            ]}
            style={pickerSelectStyles}
          />
        </View>

        <View
          style={{
            marginTop: 40,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pressable onPress={handleSubmit} style={styles.HomeButton}>
            <Text style={{ fontSize: 18 }}>Envíar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "start",
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 70,
    height: 30,
    resizeMode: "contain",
  },

  imagecontainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
    gap: 4,
  },

  appcontainer: {
    margin: 25,
    width: "100%",
    flex: 1,
    alignItems: "start",
    marginBottom: 300,
  },

  welcometext: {
    color: "white",
    fontSize: 28,
  },

  italictextwelcome: {
    color: "white",
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "200",
  },

  text: {
    color: "white",
  },

  HomeButton: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 25,
    width: 200,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
