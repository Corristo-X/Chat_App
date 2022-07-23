import React from 'react';
import {View,Text} from 'react-native'

type ChatProps = {
    username: string,
    image: string;
};

const Chat = ({username, image}: ChatProps) =>{
    return(
        <View style={{marginTop: 200, alignSelf: 'center'}}>
            <Text>Hi {username}! You can chat here shortly</Text>
        </View>
    );
}
export default Chat
