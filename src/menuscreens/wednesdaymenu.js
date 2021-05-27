import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Text,
    CheckBox,
    Alert
} from 'react-native';

/** Components */
import Buttons from '../components/Button';

export default function wednesdaymenu() {

    const [isSelected, setSelection] = useState({
        dish1: false,
        dish2: false,
        dish3: false,
    });

    const handleChange = (props) => () => {
        setSelection({ ...isSelected, [props]: props })
    }
    
    const alertOrder = () => {

        if(isSelected.dish1 == false || isSelected.dish2 == false || isSelected.dish3 == false) {
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
                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish1}
                            onValueChange={handleChange('dish1')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}> Sinampalukang Manok </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish2}
                            onValueChange={handleChange('dish2')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}> Pininyahang Manok </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish3}
                            onValueChange={handleChange('dish3')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}> Chopsuey </Text>
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
    image: {
        height: 370,
        width: '100%',
        marginBottom: 20
    },
    btnContainer: {
        marginBottom: 20,
        alignItems: 'center',
    }, container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
});

