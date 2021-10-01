import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import EntradaDeDados from './components/EntradaDeDados';
import ExibeVacinas from './components/ExibeVacinas';

export default function App() {
  const [listaVacinas, setListaVacinas] = useState([])

  const handleSubmit = (dados) => {
    setListaVacinas([...listaVacinas, dados])
  }

  return (
    <SafeAreaView style={styles.container}>
      <EntradaDeDados onSubmit={handleSubmit}/>
      <ExibeVacinas lista={listaVacinas}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    justifyContent: 'center',
  }
});
