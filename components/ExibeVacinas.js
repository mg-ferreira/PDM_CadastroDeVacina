import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import ExibeVacina from './ExibeVacina'

export default class ExibeVacinas extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vacinas Cadastradas</Text>
        {this.props.lista.length <= 0 ?
          <Text style={styles.info}>Nenhuma vacina cadastrada</Text>
          :
          <FlatList
            data={this.props.lista}
            renderItem={vacina => <ExibeVacina value={vacina.item.value}/>}
            keyExtractor={item => item.key.toString()}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 8,
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center'
  },
  info: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})