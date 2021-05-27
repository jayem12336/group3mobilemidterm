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

export default function Home({ navigation }) {
    return (
        <ImageBackground style={styles.backgroundcontainer}>
            <Image source={advertisement} style={styles.image} />
            <ScrollView>
                <View style={styles.btnContainer}>
                    <Buttons onPress={() => navigation.navigate("Monday Menu")}>Monday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons onPress={() => navigation.navigate("Tuesday Menu")}>Tuesday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons onPress={() => navigation.navigate("Wednesday Menu")}>Wednesday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons onPress={() => navigation.navigate("Thursday Menu")}>Thursday</Buttons>
                </View>
                <View style={styles.btnContainer}>
                    <Buttons onPress={() => navigation.navigate("Friday Menu")}>Friday</Buttons>
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

