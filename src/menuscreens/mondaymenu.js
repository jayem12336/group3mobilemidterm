import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

/** Components */
import Buttons from '../components/Button';
import advertisement from '../images/homeimage.jpg'

export default function mondaymenu() {
    return (
        <ImageBackground style={styles.backgroundcontainer}>
            <ScrollView>
            <Image source={advertisement} style={styles.image} />
            <View style={styles.btnContainer}>
                    <Buttons onPress={() => navigation.navigate("Mondaymenu")}>Monday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons>Tuesday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons>Wednesday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons>Thursday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons>Friday</Buttons>
                </View>
            </ScrollView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
        backgroundColor: '#76cde0'
    },
    image: {
        height: 370,
        width: '100%',
        marginBottom: 20
    },
    view: {
        flexDirection: "row",
    },
    btnContainer: {
        marginBottom: 20,
        alignItems: 'center',
    }
});

