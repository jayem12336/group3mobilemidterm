import React from 'react'
import { StyleSheet, TextInput, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')
export default function Textinput({ placeholder, onChangeText, value, secureTextEntry}) {
    return (
        <TextInput
            style={styles.textInput}
            placeholderTextColor={'#b4bfb7'}
            underlineColorAndroid='transparent'
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 47,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25,
        marginBottom: 20
    }
})