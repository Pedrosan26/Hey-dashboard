// HomeScreen.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import BezierLineChart from "../components/BezierLineChart";
import PieChartTuned from "../components/PieChartTuned";
import BarChartTuned from "../components/BarChart";
import React, { useState, useEffect } from "react";

export default function InversionScreen({ route }) {
  const { definedProfile } = route.params;

  const colorMapping = {
    Básico: { gradientFrom: "#fb8c00", gradientTo: "#ffa726" },
    Límite: { gradientFrom: "#1e3c72", gradientTo: "#2a5298" },
    Inversión: { gradientFrom: "#ff6347", gradientTo: "#ff4500" },
  };

  const { gradientFrom, gradientTo } = colorMapping[definedProfile] || {
    gradientFrom: "#fb8c00",
    gradientTo: "#ffa726",
  }; // Default colors

  const chartConfig = {
    backgroundGradientFrom: gradientFrom,
    backgroundGradientTo: gradientTo,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  const [values, setValues] = useState([]);
  const [dates, setDates] = useState([]);
  const [result, setResult] = useState();
  const [sumarry, setSummarry] = useState(" ");
  const [modal, setModal] = useState(false);

  const openModal = () => {
    console.log("Abriendo Modal");
    setModal(true);
  };

  const closeModal = () => {
    console.log("Cerrando Modal");
    setModal(false);
  };

  const fetchInversionData = async () => {
    const response = await fetch(
      "http://10.22.203.32:8000/api/IngresosUsuario/"
    );

    const sumarryResponse = await fetch(
      "http://10.22.203.32:8000/api/ResumenIngresos/"
    );

    const sumarryData = await sumarryResponse.json();
    const lastElement = sumarryData[sumarryData.length - 1];

    setSummarry(lastElement.resumen);
    console.log(sumarry);

    const colors = ["#1e3c72", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
    const data = await response.json();
    const result = data.map((item, index) => ({
      name: item.fecha,
      population: !isNaN(Number(item.cantidad)) ? Number(item.cantidad) : 0,
      color: colors[index % colors.length],
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    }));
    setResult(result);
    const values = data.slice(0,4).map((item) =>
      !isNaN(Number(item.cantidad)) ? Number(item.cantidad) : 0
    );
    const dates = data.slice(0,4).map((item) => item.fecha);

    setValues(values);
    setDates(dates);
  };

  React.useEffect(() => {
    fetchInversionData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={require("../assets/logo.png")} // Asegúrate de que la ruta sea correcta
          style={[styles.logo, { tintColor: "white" }]} // Invertir el color de la imagen
        />
        <Text style={styles.bankText}>banco</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.chartContainer}>
          <Text style={styles.text}>
            Tus ingresos clasificados y desglosados
            <Text style={styles.italicText}> para ti</Text>
          </Text>
          <Text style={styles.texttitle}>Mayo 2024</Text>
          <BezierLineChart
            labels={dates}
            data={values}
            chartConfig={chartConfig}
          />
        </View>
        <View style={styles.chartContainer}>
          <BarChartTuned
            labels={dates}
            mydata={values}
            chartConfig={chartConfig}
          />
        </View>
        <View style={styles.chartContainer}>
          <PieChartTuned pieData={result} chartConfig={chartConfig} />
          <View style={styles.statsContainer}>
            <Text style={styles.text}>Estadísticas</Text>
            <View>
              <Text style={styles.stats}>
                Monto actual: <Text>$52,000</Text>{" "}
              </Text>
              <Text style={styles.stats}>
                Ingresos mensuales en promedio:{" "}
                <Text style={{ color: "green" }}>
                 ${Math.round(values.reduce((a, b) => a + b, 0) / values.length)} MXN
                </Text>{" "}
              </Text>
              <Text style={styles.stats}>
                Porcentaje gastado:{" "}
                <Text style={{ color: "green" }}>+11.78%</Text>{" "}
              </Text>
            </View>
          </View>
          <Text style={styles.scrolltext}>
            Tus ingresos tuvieron buenos altos estos meses. Para más
            detalle, lee el análisis de tu información financiera supercargado con
            inteligencia artificial.
          </Text>
          <Pressable style={styles.HomeButton} onTouchStart={openModal} >
            <Text style={styles.buttonText}>Generar reporte inteligente</Text>
          </Pressable>
        </View>
      </ScrollView>
      {modal && (
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modal}>
          <Pressable onPress={closeModal}>
                <View style={styles.exit}>
                  <Text style={{color:"red",fontSize:32}}>X </Text>
                </View>
              </Pressable>
            <View style={styles.modalContent}>
              
              <Text style={{fontSize:16,marginTop:20,fontFamily:"Georgia",margin:"auto"}}>{sumarry}</Text>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  imagecontainer: {
    flex: 0.1,
    alignItems: "baseline",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
    gap: 4,
  },
  logo: {
    width: 70,
    height: 30,
    resizeMode: "contain",
  },
  bankText: {
    color: "white",
    margin: 3,
    fontStyle: "italic",
    fontSize: 24,
    paddingBottom: 5,
  },
  scrollView: {
    flex: 1,
    marginLeft: 8,
  },
  chartContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "200",
  },
  italicText: {
    fontStyle: "italic",
    fontWeight: "100",
  },
  texttitle: {
    color: "white",
    fontSize: 36,
    fontWeight: "300",
  },
  statsContainer: {
    flex: 1,
    gap: 10,
  },
  stats: {
    color: "white",
    fontSize: 20,
    marginTop: 2,
    fontWeight: "200",
  },
  scrolltext: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "200",
  },
  HomeButton: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 15,
    width: 240,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
  },
  modal: {
    position: "relative",
    top: 0,
    left: 0,
    width: 450,
    height: 900,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },

  modalContent: {
    
    display:"flex",
    width:380,
    height:250,
    backgroundColor:"#b5b5b5",
    textAlign:"justify",
    marginEnd:50,
    marginBottom:200
  },
  exit: {
    height:240,
    width:300,
    alignItems:"flex-end",
  },
});
