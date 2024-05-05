import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { BarChart, LineChart, XAxis, YAxis } from 'react-native-svg-charts'; // Importamos LineChart
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  // Datos de ejemplo para el gráfico de barras
  const barChartData = [
    { month: 'Jan', value: 13000 },
    { month: 'Feb', value: 16500 },
    { month: 'Mar', value: 14250 },
    { month: 'Apr', value: 19000 },
    { month: 'may', value: 14000 },
    { month: 'Jun', value: 12500 },
    { month: 'Jul', value: 18250 },
    { month: 'Ago', value: 13000 },
    { month: 'sep', value: 19000 },
    { month: 'Oct', value: 12500 },
    { month: 'Nov', value: 15250 },
    { month: 'Dic', value: 18000 }
  ];

  // Datos de ejemplo para el gráfico de línea
  const lineChartData = [
    { month: 'Jan', value: 12000 },
    { month: 'Feb', value: 15500 },
    { month: 'Mar', value: 13250 },
    { month: 'Apr', value: 18000 },
    { month: 'may', value: 1300 },
    { month: 'Jun', value: 1150 },
    { month: 'Jul', value: 1725 },
    { month: 'Ago', value: 1200 },
    { month: 'sep', value: 1800 },
    { month: 'Oct', value: 1150 },
    { month: 'Nov', value: 1425 },
    { month: 'Dic', value: 1700 }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainerP}>
        <Image
          source={require('../assets/logo.png')} // Ruta del asset logo.png
          style={[styles.logo, { tintColor: 'white' }]}
        />
        <Text style={styles.textoLogoP}>banco</Text>
      </View>
      <Text>This is Dashboard.</Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', height: 300 }}>
        <YAxis
          data={barChartData.map(item => item.value)}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: 'grey', fontSize: 10 }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1 }}>
          <BarChart
            style={{ flex: 1 }}
            data={barChartData.map(item => item.value)} // Solo se pasan los valores como datos
            svg={{ fill: '#2E94DC' }}
            contentInset={{ top: 30, bottom: 30 }}
            spacingInner={0.2}
            gridMin={0}
          />
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={barChartData}
            formatLabel={(value, index) => barChartData[index].month}
            contentInset={{ left: 30, right: 30 }}
            svg={{ fontSize: 10, fill: 'gray' }}
          />
        </View>
      </View>
      {/* Agregar gráfico de línea */}
      <View style={{ flexDirection: 'row', height: 300 }}>
        <YAxis
          data={lineChartData.map(item => item.value)}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: 'grey', fontSize: 10 }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1 }}>
          <LineChart
            style={{ flex: 1 }}
            data={lineChartData.map(item => item.value)}
            svg={{ stroke: 'green', strokeWidth: 2 }}
            contentInset={{ top: 30, bottom: 30 }}
            gridMin={0}
          />
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={lineChartData}
            formatLabel={(value, index) => lineChartData[index].month}
            contentInset={{ left: 30, right: 30 }}
            svg={{ fontSize: 10, fill: 'gray' }}
          />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.buttonText}>Regresar a Perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainerP: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    alignSelf: 'flex-start', 
    marginBottom: 100, 
    marginRight: 250,
  },
  logo: {
    width: 70,
    height: 30,
    resizeMode: 'contain', 
  },
  textoLogoP: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10, 
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
