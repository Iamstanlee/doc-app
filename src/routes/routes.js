import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Dash from "../screens/dash/dash";
import Fonts from "../constants/Fonts";
import DocForm from "../screens/doctor/docForm";
import DocList from "../screens/doctor/docList";
import Doctor from "../screens/doctor/doctor";
import Splash from "../screens/splash/splash";

const BottomTab = createBottomTabNavigator(
    {
        Dashboard: {
            screen: Dash,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={24} color={tintColor} />
            }
        },
        Drugs: {
            screen: Dash,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-medkit" size={24} color={tintColor} />
                )
            }
        },
        Profile: {
            screen: Dash,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-person" size={24} color={tintColor} />
                )
            }
        },
        Settings: {
            screen: Dash,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-settings" size={24} color={tintColor} />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#7E44F6",
            inactiveTintColor: "#949494",
            labelStyle: {
                fontFamily: Fonts.regular
            }
        }
    }
);

const AppStack = createStackNavigator(
    {
        home: BottomTab,
        docForm: DocForm,
        docList: DocList,
        doctor: Doctor
    },
    {
        headerMode: "none"
    }
);

const root = createSwitchNavigator({
    splash: Splash,
    app: AppStack
    // auth:AuthStack
});

export default createAppContainer(root);
