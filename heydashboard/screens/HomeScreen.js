// HomeScreen.js
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Home.</Text>
      <Button
        title="Go to Encuesta Screen"
        onPress={() => navigation.navigate("Encuesta")}
      />
      <Button
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate("Dashboard")}
      />

      <Button
        title="Go to Perfil Screen"
        onPress={() => navigation.navigate("Perfil")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
