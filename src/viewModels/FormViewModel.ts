// Archivo: src/viewModels/FormViewModel.ts
import { useState } from 'react';

const useFormViewModel = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState<string[]>(Array(2).fill(''));

  const updateNumPlayers = (value: number) => {
    setNumPlayers(value);
    setPlayers(Array(value).fill(''));
  };

  const updatePlayerName = (index: number, name: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = name;
    setPlayers(updatedPlayers);
  };

  return {
    numPlayers,
    players,
    updateNumPlayers,
    updatePlayerName,
  };
};

export default useFormViewModel;
