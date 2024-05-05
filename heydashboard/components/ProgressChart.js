import { Dimensions, View, Text, StyleSheet } from "react-native";
import {
  ProgressChart
} from "react-native-chart-kit";

export default function ProgressChartTuned({chartConfig}) {
    const width = Dimensions.get('window').width - 20;
    const height = 220
  return (
    <View>
      <Text style = {styles.text}>Gráfico de progreso</Text>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={width}
        height={height}
        chartConfig={chartConfig}
        style={{marginVertical: 8, borderRadius: 10}}
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


