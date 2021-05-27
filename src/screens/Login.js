import React, { useState } from 'react';

import firebase from '../utils/firebase'

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Alert,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

/** Components */
import Buttons from '../components/Button';
import TextField from '../components/Textinput';

/** Icon */
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

/** Image */
import Logo from '../images/Logo.png'

export default function Login({ navigation }) {
    const [payload, setPayLoad] = useState({
        email: "",
        password: ""
    });

    /** Hide and Show password */
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const handleChange = (props) => (text) => {
        setPayLoad({ ...payload, [props]: text })
    }

    const login = (e) => {

        e.preventDefault();

        if (!payload.email || !payload.password) {
            Alert.alert(
                "Login Failed",
                "Please fill up the following fields",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        else {
            //firebase

            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;

                    Alert.alert(
                        "Login Successful",
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
                        "Login Failed",
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
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logo}>
                            <Image source={Logo} style={styles.logo}/>
                        </View>
                    </View>
                    <View style={styles.textField}>
                        <TextField
                            placeholder={'Email'}
                            onChangeText={handleChange("email")}
                            value={payload.email}
                        />
                        <Ionicons
                            name="ios-person"
                            size={26}
                            color={'black'}
                            style={styles.inputIcon}
                        />
                    </View>
                    <View style={styles.textField}>
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
                    <Buttons onPress={login}>
                        Login
                    </Buttons>
                    <Text style={styles.textStyle}>Dont have an account yet?
                    <Link to='/Signup' style={{ color: 'blue' }}>Signup</Link>
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#76cde0'
    },
    loginContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 50,
        marginBottom: 70
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10
    },
    inputIcon: {
        position: 'absolute',
        top: 7,
        left: 40
    },
    textStyle: {
        marginTop: 10,
        color: "white",
        fontSize: 15

    },
    textField: {
        marginBottom: 10
    },
    eyeIcon: {
        position: 'absolute',
        top: 8,
        right: 42
    }
});
