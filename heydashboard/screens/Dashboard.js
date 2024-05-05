// HomeScreen.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image } from "react-native";
import {
  LineChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import AhorroScreen from "./Ahorro";
import IngresosScreen from "./IngresosYGastos";
import InversionScreen from "./Inversion";

export default function DashboardScreen({ navigation }) {
  const chartConfig = {
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
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
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "gray",
          height: 110,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          padding: 5,
        },
      }}
    >
      <Tab.Screen
        name="Ingresos y gastos"
        component={IngresosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ahorro"
        component={AhorroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Inversiones"
        component={InversionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,0)",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  container2: {
    display: "flex",
    backgroundColor: "rgb(0,0,0)",
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

  logo: {
    width: 70,
    height: 30,
    resizeMode: "contain",
  },

  text: {
    color: "white",
    marginLeft: 20,
    marginTop: 30,
    fontSize: 28,
  },
});
