// Archivo: src/views/GalleryScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const GalleryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Navbar superior */}
      <View style={styles.navbarTop}>
        <Button title="Btn1" onPress={() => {}} />
        <Button title="Btn2" onPress={() => {}} />
        <Button title="Btn3" onPress={() => {}} />
        <Button title="Btn4" onPress={() => {}} />
      </View>

      {/* Galería de imágenes */}
      <ScrollView contentContainerStyle={styles.gallery}>
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <Image
              key={index}
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.image}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default GalleryScreen;
