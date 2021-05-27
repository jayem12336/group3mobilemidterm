import React, { useState, useEffect } from 'react';
import { Text, LogBox } from 'react-native'

import firebase from './firebase'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

/** Icons */
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


/** Screen */
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home';
import Mondaymenu from '../menuscreens/mondaymenu'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    drawerIcon: () => <FontAwesome name="home" size={24} color="black" />
                }}
            />
            <Drawer.Screen name="Logout" component={Login} options={{
                headerShown: false,
                drawerIcon: () => <Entypo name="arrow-left" size={24} color="black" />
            }} />
        </Drawer.Navigator>
    );
}


export default function Navigation() {

    LogBox.ignoreLogs(['Setting a timer']);

    const [values, setValues] = useState({
        isAuthenticated: false,
        isLoading: true
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                setValues({ isAuthenticated: true, isLoading: false });
            } else {
                // No user is signed in.
                setValues({ isAuthenticated: false, isLoading: false });
            }
        });
    }, [])

    if (values.isLoading) {
        return <Text style={{ textAlign: 'center' }}>Loading....</Text>
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={NavigationDrawer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Mondaymenu"
                    component={Mondaymenu}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

