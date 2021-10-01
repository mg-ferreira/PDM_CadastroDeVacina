import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default (props) => {
  const truncaTexto = (texto) => {
    if (texto.length > 25)
      return texto.substr(0, 23) + '...'
    return texto
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Fabricante:</Text>
        <Text style={styles.text}>{props.value.fabricante}</Text>
      </View>
      <View style={styles.row}>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Lote:</Text>
        <Text style={styles.text}>{props.value.lote}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.text}>{truncaTexto(props.value.descricao)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    marginLeft: 8
  }
})