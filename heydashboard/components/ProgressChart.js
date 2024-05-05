import { Dimensions, View, Text } from "react-native";
import {
  ProgressChart
} from "react-native-chart-kit";

export default function ProgressChartTuned({chartConfig}) {
    const width = Dimensions.get('window').width - 20;
    const height = 220
  return (
    <View>
      <Text>Progress Chart</Text>
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
