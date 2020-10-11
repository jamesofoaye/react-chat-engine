import axios from 'axios'
import * as str from '..'

export function removePerson(props, chatId, userName) {
    axios.put(
        `${str.getApiUrl(props)}/chats/${chatId}/people/`,
        { username: userName },
        { headers: { 
            "Public-Key": props.publicKey,
            "User-Name": props.userName,
            "User-Secret": props.userPassword,
        }}
    )

    .then((response) => {})
    
    .catch((error) => {
        console.log('Delete Person Error', error)
    });
}