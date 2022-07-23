import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PeronalInfo from './components/PeronalInfo';
import Styles from './components/Styles'
import Chat from './components/Chat'
export default function App() {
  const storageUserNameKey='chatapp-username';
  const storageImageKey='chatapp-image'
  const[username,setUsername]=useState("")
  const[image,setImage]=useState("")
  const [isLoading,setisLoading]=useState(true)

  const fetchPersonalData = async()=>{
    let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey)
    let userName = fetchedUsername == null ? "" : fetchedUsername;
    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage == null ? "" : fetchedImage;
    setUsername(userName);
    setImage(image)
  }

  const onPersonalInfoClosed = async (name: string, image: string) =>{
      setUsername(name)
      await AsyncStorage.setItem(storageUserNameKey,name)
      setImage(image)
      await AsyncStorage.setItem(storageImageKey,image)

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

