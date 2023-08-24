import { useState } from 'react';

// Ce hook permet de stocker et de récupérer facilement des données de localStorage. 
// Il est utilisable dans n'importe quel composant.

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return {
    value, setItem, getItem, removeItem,
  };
};
