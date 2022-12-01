import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/Home.jsx";
import Favorites from "../screens/Favorites.jsx";
import CustomChoice from "../screens/CustomChoice.jsx" 
import Logout from "../screens/Logout.jsx"
import Users from '../screens/Users.jsx';


import style from '../styles/components/navBar.jsx';
import globalStyle from '../styles/components/global.jsx';


const Tab = createBottomTabNavigator();


function Tabs(props) {
    
    const isAdmin = props.isAdmin;

    return(
            <Tab.Navigator initialRouteName={"Home"}
                           screenOptions={{ tabBarActiveTintColor: globalStyle.color.pink,
                                            tabBarInactiveTintColor: globalStyle.color.inactive,
                                            tabBarLabelStyle: style.label,
                                            tabBarLabelPosition: "below-icon",
                                            tabBarStyle: style.bar,
                                            headerShown: false}}>
                                                
                <Tab.Screen name="Home"
                            component={Home}
                            initialParams = {{ isAdmin: isAdmin }}
                            options={{
                                tabBarLabel: "ACCUEIL",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/homeIcon.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                ),
                                unmountOnBlur: true
                            }}
                />
                
                <Tab.Screen name="Favorites"
                            component={Favorites}
                            initialParams = {{ isAdmin: isAdmin}}
                            options={{
                                tabBarLabel: "FAVORIS",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/fav.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                ),
                                unmountOnBlur: true
                            }}
                />

                <Tab.Screen name="CustomPictograms"
                            component={CustomChoice}
                            options={{
                                tabBarLabel: "PERSONNALISATION",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/custom.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                )
                            }}
                />

                {isAdmin &&
                
                <Tab.Screen name="Users"
                            component = {Users}
                            initialParams = {{ isLogged:true}}
                            options={{
                                tabBarLabel: "UTILISATEURS",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/user.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                ),
                                unmountOnBlur: true
                            }}
                />

                }

                <Tab.Screen name="Logout"
                            component={Logout}
                            initialParams = {{ isAdmin: isAdmin}}
                            options={{
                                tabBarLabel: "DECONNEXION",
                                tabBarIcon: ({focused, color, size}) => (
                                    <Image source={require('../images/logOut.png')}
                                           style={[style.icon, {tintColor: color}]}/>
                                )
                            }}
                />
            </Tab.Navigator>
    )
};

/*
,
                                tabBarButton: (props) => (
                                    <TouchableOpacity 
                                        {...props}
                                        onPress={()=>console.log("Hello")}
                                        >
                                        <Image source={require('../images/logOut.png')}
                                        style={[style.icon, {tintColor: props.color}]}/>
                                    </TouchableOpacity>
                                )*/

export default Tabs;