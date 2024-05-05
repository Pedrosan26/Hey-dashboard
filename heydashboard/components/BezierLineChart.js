import { Dimensions, View, Text, StyleSheet } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";

export default function BezierLineChart({chartConfig}) {
  return (
    <View>
    <Text style = {styles.text}>Gráfico lineal</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={260}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
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
