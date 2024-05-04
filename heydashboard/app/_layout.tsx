import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Layout() {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the app!</Text>
    </View>
  );
}
