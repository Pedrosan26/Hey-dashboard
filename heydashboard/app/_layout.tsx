import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function Layout() {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the app!!!!</Text>
      <Link  href = '/PerfilPro'>
        <Text>pagina navi perfil pro</Text>
        </Link>
        
    </View>
  );
}
