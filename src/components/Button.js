import React from 'react'
import { TouchableOpacity, Dimensions, StyleSheet, Text } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default function Button({ children, onPress }) {
    return (
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text} onPress={onPress}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#455bff',
        justifyContent: 'center',
        marginBottom: 5,
        color: 'white',
        fontWeight: "bold"
    },
    text: {
        color: 'white',
        fontWeight: '100',
        textAlign: 'center',
        fontSize: 18
    }
});