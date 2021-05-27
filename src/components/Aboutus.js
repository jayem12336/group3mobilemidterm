import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';
export default function Aboutus() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.txtaboutus}>About Us</Text>
                <View>
                    <View style={styles.containeraboutus}>
                        <Text style={styles.textAboutus}>Mission</Text>
                        <Text>We the T-Shirt Design, are always here for our customers
                        promising to make sure the products will receive on time.
                            </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containeraboutus}>
                        <Text style={styles.textAboutus}>Vission</Text>
                        <Text>T-Shirt Design's Vision is to make sure that our users can buy
                        and pay bills easily.
                            </Text>
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
    containeraboutus: {
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
    },
    textAboutus: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10
    },
    txtaboutus:{
        color:"white",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10
    }



});
