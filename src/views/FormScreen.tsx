import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useFormViewModel from '../viewModels/FormViewModel';

const FormScreen: React.FC = () => {
  const { numPlayers, players, updateNumPlayers, updatePlayerName } = useFormViewModel();

  return (
    <View style={styles.container}>
      <Text>¿Cuántos jugadores? (2-8)</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={numPlayers.toString()}
        onChangeText={(text) => updateNumPlayers(Math.min(Math.max(Number(text), 2), 8))}
      />

      {players.map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Nombre del jugador ${index + 1}`}
          value={players[index]}
          onChangeText={(text) => updatePlayerName(index, text)}
        />
      ))}

      <Button title="Generar" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    padding: 10,
  },
});

export default FormScreen;
