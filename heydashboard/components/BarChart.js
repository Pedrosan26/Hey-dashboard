import { Dimensions, View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function BarChartTuned({chartConfig}) {
  const width = Dimensions.get("window").width - 25;
  const height = 220;

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [50, 20, 2, 86, 71, 100],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      },
      {
        data: [20, 10, 4, 56, 87, 90],
      },
      {
        data: [30, 90, 67, 54, 10, 2],
      },
    ],
  };

  return (
    <View>
      <Text style = {styles.text}>Gráfico de barras</Text>
      <BarChart
        width={width}
        height={height}
        data={data}
        chartConfig={chartConfig}
        style={{ margin: 1, borderRadius: 10 }}
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
    marginBottom: 10
  },

  scrolltext: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
});
