import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Fonts from "../../constants/Fonts";

const splash = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => navigation.navigate("home"), 2000);
    });

    return (
        <React.Fragment>
            <StatusBar hidden={true} />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text
                    style={{
                        color: "#7E44F6",
                        fontFamily: Fonts.medium,
                        fontSize: 26
                    }}
                >
                    EDOCARE
                </Text>
                <Text
                    style={{
                        fontFamily: Fonts.regular,
                        fontSize: 14,
                        marginTop: 4
                    }}
                >
                    ...your health matters
                </Text>
            </View>
        </React.Fragment>
    );
};

export default splash;
