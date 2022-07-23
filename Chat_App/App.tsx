import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import PeronalInfo from './components/PeronalInfo';
import Styles from './components/Styles'
import Chat from './components/Chat'
export default function App() {
  const[username,setUsername]=useState("")
  const[image,setImage]=useState("")
  const onPersonalInfoClosed = (name: string, image: string) =>{
      setUsername(name)
      setImage(image)
  }
  let activeComponent = username != "" ?(
    <Chat username={username} image={image}/>
  ) : (
    <PeronalInfo onClosed={onPersonalInfoClosed}/>
  )
  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

