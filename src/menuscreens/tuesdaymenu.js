import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Text,
    CheckBox,
    Alert,
    Image
} from 'react-native';

/** Components */
import Buttons from '../components/Button';

/** image */
import tuesdayImage from '../images/tuesday.jpg'

export default function tuesdaymenu() {

    const [isSelected, setSelection] = useState({
        dish1: false,
        dish2: false,
        dish3: false,
    });

    const handleChange = (props) => (Boolean) => {
        setSelection({ ...isSelected, [props]: Boolean })
    }

    const alertOrder = () => {

        if (isSelected.dish1 === true || isSelected.dish2 === true || isSelected.dish3 === true) {
            Alert.alert(
                "Order Successful",
                "Order was scheduled for delivery",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        else {
            Alert.alert(
                "Order Failed",
                "Please select your order",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <ImageBackground style={styles.backgroundcontainer}>
            <ScrollView>
                <Image source={tuesdayImage} style={styles.image} />
                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish1}
                            onValueChange={handleChange('dish1')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}> Pork Adobo </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish2}
                            onValueChange={handleChange('dish2')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}> Ginataang Sitaw at Kalabasa </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish3}
                            onValueChange={handleChange('dish3')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}> Daing na Bangus </Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Buttons onPress={alertOrder}> Place order </Buttons>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
        backgroundColor: '#76cde0',
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    btnContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    image: {
        height: 300,
        width: '100%',
        marginBottom: 20,
        marginTop: 20
    },
});

