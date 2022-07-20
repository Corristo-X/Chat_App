import React from 'react'
import {View,TextInput,Button,Text,Image} from 'react-native'
import styles from './styles';
import Styles from './styles'

const PersonalInfo = ()=>{
return(
<View style={Styles.personalInfoContainer}>

<Image 
style={Styles.logo}
source={require('../assets/wired-brain-coffee-logo.png')} />
<View style={styles.enterYourName}>

    <Text style={Styles.nameText}> Please enter your name</Text>
    <TextInput style={styles.nameTextInput}/> 
</View>
<Button title="Start chatting!" onPress={()=>{}}/>
</View>


);
}

export default PersonalInfo