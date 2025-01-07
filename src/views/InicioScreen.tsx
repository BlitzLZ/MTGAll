// Archivo: src/views/InicioScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InicioScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Button title="Entrar" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InicioScreen;