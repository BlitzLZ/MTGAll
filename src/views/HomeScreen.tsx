// Archivo: src/views/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Navbar superior */}
      <View style={styles.navbarTop}>
        <Button title="Left" onPress={() => {}} />
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <Button title="Right" onPress={() => {}} />
      </View>

      {/* Área de contenido */}
      <View style={styles.content}>
        {/* Mitad superior */}
        <View style={styles.topSection}>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </View>

        {/* Mitad inferior */}
        <View style={styles.bottomSection}>
          <View style={styles.smallSquare}></View>
          <View style={styles.smallSquare}></View>
          <View style={styles.smallSquare}></View>
        </View>
      </View>

      {/* Navbar inferior */}
      <View style={styles.navbarBottom}>
        <Button title="Btn1" onPress={() => navigation.navigate('FormScreen')} />
        <Button title="Btn2" onPress={() => navigation.navigate('GalleryScreen')} />
        <Button title="Btn3" onPress={() => {}} />
        <Button title="Btn4" onPress={() => {}} />
        <Button title="Btn5" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgrey',
  },
  smallSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgrey',
  },
  navbarBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default HomeScreen;