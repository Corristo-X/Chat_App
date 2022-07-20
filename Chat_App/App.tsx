import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import PeronalInfo from './components/PeronalInfo';
import Styles from './components/styles'
export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <PeronalInfo/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

