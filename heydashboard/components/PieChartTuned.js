import { Dimensions, View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default function PieChartTuned({chartConfig, pieData}) {
  const width = 350;
  const height = 220;

  if (pieData === undefined ||  pieData.length === 0) return <Text>Loading..</Text>

  const pieChartData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <View>
      <Text style = {styles.text}>Gráfico PIE</Text>
      <PieChart
        data={pieData ? pieData : pieChartData}
        height={height}
        width={width}
        chartConfig={chartConfig}
        accessor="population"
        style={{ margin: 2, borderRadius: 18 }}
      />
    </View>
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

  logo: {
    width: 70,
    height: 30,
    resizeMode: "contain",
  },

  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "200",
    marginBottom: 15
  },

  scrolltext: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
});

