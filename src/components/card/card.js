import React from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";
import Fonts from "../../constants/Fonts";

const card = ({ icon, gridKey, gridValue, route, navigation }) => {
    const handleAction = () => navigation.navigate(route);

    return (
        <Card
            onPress={handleAction}
            style={{ margin: 20, height: 120, width: 130, backgroundColor: "#8b8b8b" }}
        >
            <Card.Content style={{ flexDirection: "column", justifyContent: "space-evenly" }}>
                <Icon name={icon} size={25} color="#FFF" />
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        marginTop: 12
                    }}
                >
                    <Text style={{ color: "#FFF", fontSize: 15, fontFamily: Fonts.medium }}>
                        {gridKey}
                    </Text>
                    <Text style={{ color: "#FFF", fontSize: 13, fontFamily: Fonts.regular }}>
                        {gridValue}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    );
};

export default withNavigation(card);
