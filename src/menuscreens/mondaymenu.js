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

export default function mondaymenu() {

    const [isSelected, setSelection] = useState({
        dish1: false,
        dish2: false,
        dish3: false,
    });

    const handleChange = (props) => (Boolean) => {
        setSelection({ ...isSelected, [props]: Boolean })
    }
    
    const alertOrder = () => {

        if(isSelected.dish1 === true || isSelected.dish2 === true || isSelected.dish3 === true) {
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
                        <Text style={styles.label}>Chicken Tinola </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish2}
                            onValueChange={handleChange('dish2')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Paksiw na Bangus</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected.dish3}
                            onValueChange={handleChange('dish3')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Nilagang Baka</Text>
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
        backgroundColor: '#76cde0',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
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

