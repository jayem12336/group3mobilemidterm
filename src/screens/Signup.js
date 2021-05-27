import React, { useState } from 'react';

import firebase from '../utils/firebase'

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';
import { Link } from '@react-navigation/native';

/** Components */
import Buttons from '../components/Button'
import TextField from '../components/Textinput';

/** Icon */
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


/** Image */


export default function Signup({ navigation }) {

    const [payload, setPayLoad] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    /** Hide and Show password */
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const handleChange = (props) => (text) => {
        setPayLoad({ ...payload, [props]: text })
    }

    const register = (e) => {

        e.preventDefault();

        if (!payload.email || !payload.password || !payload.confirmPassword) {
            Alert.alert(
                "Registration Failed",
                "Please fill up the following fields",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        } else if (payload.password !== payload.confirmPassword) {
            Alert.alert(
                "Registration Failed",
                "Password and Confirm Password not match",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        } else {
            //firebase
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    // ...
                    Alert.alert(
                        "Register Successful",
                        "Welcome" + " " + user.email,
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );
                    navigation.navigate("Home")


                })
                .catch((error) => {
                    //var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    Alert.alert(
                        "Signup Failed",
                        errorMessage,
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );
                });
        }
    };

    return (
        <ImageBackground style={styles.backgroundContainer}>
            <ScrollView>
                <View style={styles.signupContainer}>
                    <View>
                        <FontAwesome name="user-circle-o" size={80} color="white" style={styles.icon} />
                        <Text style={styles.logoText}>Signup</Text>
                    </View>
                    <View>
                        <TextField
                            placeholder={'Email'}
                            onChangeText={handleChange("email")}
                            value={payload.email}
                        />
                        <Ionicons
                            style={styles.inputIcon}
                            name="ios-person"
                            size={26}
                            color={'black'}
                        />
                    </View>
                    <View>
                        <TextField
                            placeholder={'Password'}
                            onChangeText={handleChange("password")}
                            value={payload.password}
                            secureTextEntry={visible}
                        />
                        <FontAwesome5
                            style={styles.inputIcon}
                            name="lock"
                            size={26}
                            color="black"
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => {
                                setVisible(!visible)
                                setShow(!show)
                            }}
                        >
                            <Ionicons
                                name={show === true ? 'eye' : 'eye-off'}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextField
                            placeholder={'Confirm Password'}
                            onChangeText={handleChange("confirmPassword")}
                            value={payload.confirmPassword}
                            secureTextEntry={visible}
                        />
                        <FontAwesome5
                            style={styles.inputIcon}
                            name="lock"
                            size={26}
                            color="black"
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => {
                                setVisible(!visible)
                                setShow(!show)
                            }}
                        >
                            <Ionicons
                                name={show === true ? 'eye' : 'eye-off'}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <Buttons onPress={register}>
                        Signup
                    </Buttons>
                    <Text style={styles.textStyle}>Already have an Account?
                          <Link to='/Login' style={{ color: 'blue' }}>Login</Link>
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground >
    )
};
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#76cde0'
    },
    icon: {
        marginTop: 80
    },
    signupContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center"
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 42
    },
    eyeIcon: {
        position: 'absolute',
        top: 8,
        right: 42
    },
    textStyle: {
        marginTop: 10,
        color: "white",
        fontSize: 15
    }
});
