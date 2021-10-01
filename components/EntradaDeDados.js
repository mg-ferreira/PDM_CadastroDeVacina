import React, { useState } from 'react'
import { View, Button, Text, TextInput, StyleSheet, Keyboard } from 'react-native'

export default (props) => {
  const [cadastro, setCadastro] = useState({ fabricante: '', lote: '', descricao: '' })
  const [contador, setContador] = useState(0)

  const retornaDados = () => {
    Keyboard.dismiss()
    if (cadastro.lote === '' || cadastro.descricao === '' || cadastro.fabricante === '')
      return alert('Preencha os campos em branco')
    
    props.onSubmit({ key: contador, value: cadastro })
    setCadastro({ lote: '', descricao: '', fabricante: '' })
    setContador(contador + 1)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Vacinas</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Fabricante' 
          value={cadastro.fabricante}
          onChangeText={t => setCadastro({ ...cadastro, 'fabricante': t })} 
        />
        <TextInput 
          style={styles.input}
          placeholder='Lote'
          value={cadastro.lote}
          onChangeText={t => setCadastro({ ...cadastro, 'lote': t })} 
        />
        <TextInput 
          style={styles.input}
          placeholder='Descrição'
          value={cadastro.descricao}
          onChangeText={t => setCadastro({ ...cadastro, 'descricao': t })} 
        />
      </View>
      <Button title='Cadastrar' onPress={retornaDados}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#444',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 8,
    textAlign: 'center'
  },
  form: {
    alignItems: 'center',
    marginBottom: 8
  },
  input: {
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    margin: 8,
    fontSize: 18
  }
})