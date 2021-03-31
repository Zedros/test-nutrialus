import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import UserData from './components/UserData'
const urlDataUsuario = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com/'

export default function App() {
  const [dataUsuario, setDataUsuario] = useState(null)
  const [loading, setLoading] = useState(true)


  // useEffect(() => {
  //   (async () => {
  //     await fetchDataUsuario(urlDataUsuario)
  //   })();
  // }, [])

  async function fetchDataUsuario(URL: string) {
    const respuesta = await fetch(URL)
    const resultados = await respuesta.json()
    setDataUsuario(resultados)
    return resultados
  }

  if (!loading) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <UserData dataUsuario={dataUsuario} />
        <Button title="Actualizar" onPress={() => fetchDataUsuario(urlDataUsuario)} />
      </View>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={() => fetchDataUsuario(urlDataUsuario)}
        onFinish={() => setLoading(false)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
