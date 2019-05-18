import React from "react";
import { View, StatusBar } from "react-native";
import Appbar from "../../components/appbar/appbar";
import { Text } from "react-native-paper";
import Card from "../../components/card/card";
import Fonts from "../../constants/Fonts";

const grid = [
    {
        icon: "ios-person",
        gridKey: "Find Doctor",
        gridValue: "44 Doctors",
        route: "docForm"
    },
    {
        icon: "ios-pulse",
        gridKey: "Find Hospital",
        gridValue: "150 Hospitals",
        route: "docForm"
    },
    {
        icon: "ios-pie",
        gridKey: "Appointments",
        gridValue: "4 available",
        route: "docForm"
    },
    {
        icon: "ios-podium",
        gridKey: "Price Services",
        gridValue: "3 Services",
        route: "docForm"
    }
];

const dash = props => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#7E44F6" />
            <Appbar />
            <View>
                <Text
                    style={{
                        paddingLeft: 18,
                        paddingTop: 14,
                        fontSize: 25,
                        marginBottom: 15,
                        fontFamily: Fonts.regular
                    }}
                >
                    Hello Elizabeth Eze
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                {grid.slice(0, 2).map(item => (
                    <Card
                        key={item.gridKey}
                        icon={item.icon}
                        route={item.route}
                        gridKey={item.gridKey}
                        gridValue={item.gridValue}
                    />
                ))}
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                {grid.slice(2).map(item => (
                    <Card
                        key={item.gridKey}
                        icon={item.icon}
                        route={item.route}
                        gridKey={item.gridKey}
                        gridValue={item.gridValue}
                    />
                ))}
            </View>
        </React.Fragment>
    );
};

export default dash;
