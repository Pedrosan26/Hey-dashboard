import { Dimensions, View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function BarChartTuned({chartConfig, labels, mydata}) {
  const width = Dimensions.get("window").width - 25;
  const height = 220;

  const data = {
    labels: labels ? labels : ["1"],
    datasets: [
      {
        data: mydata ? mydata : [1],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
