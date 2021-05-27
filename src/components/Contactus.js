import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';

/** Icon */
import { Entypo } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
export default function Contactus() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.textContactus}>Contact Us</Text>
                <View style={styles.containercontactus}>
                    <View><Entypo name="old-phone" size={40} color="#2460A7FF" style={styles.icon} /></View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textStyle}>Phone</Text>
                        <Text>0909928311</Text>
                        <Text>0935226541</Text>
                    </View>
                </View>
                <View style={styles.containercontactus}>
                    <View><Zocial name="email" size={40} color="#2460A7FF" style={styles.icon} /></View>
                    <View>
                        <Text style={styles.textStyle}>Email</Text>
                        <Text>Tshirtdesign@gmail.com</Text>
                        <Text>tshirt.931@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.containercontactus}>
                    <View><Entypo name="address" size={40} color="#2460A7FF" style={styles.icon} /></View>
                    <View >
                        <Text style={styles.textStyle}>Address</Text>
                        <Text>Bahay Pare</Text>
                        <Text>Candaba,Pampanga</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 10
    },
    containercontactus: {
        height: 120,
        width: 332,
        marginLeft: 15,
        marginBottom: 20,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: "#9CC3D5FF",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        textAlign: "center",
        flexDirection: "row",
    },
    textContactus: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10,
        color:"white"
    },
    icon: {
        padding: 20
    },
    textStyle: {
        fontSize: 20
    }




});
