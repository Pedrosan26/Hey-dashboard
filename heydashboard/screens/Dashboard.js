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

export default function DashboardScreen({ route }) {
  const { definedProfile } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "whitesmoke",
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          padding: 5,
        },
      }}
    >
      <Tab.Screen
    name="Ingresos"
    component={IngresosScreen}
    initialParams={{ definedProfile: definedProfile }}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="wallet" color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Gastos"
    component={AhorroScreen}
    initialParams={{ definedProfile: definedProfile }}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="cash" color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Inversiones"
    component={InversionScreen}
    initialParams={{ definedProfile: definedProfile }}
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
