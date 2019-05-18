import React from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, Avatar } from "react-native-paper";
import Fonts from "../../constants/Fonts";

const docCard = ({ navigation, route, avatar, name, review, distance }) => {
    const handleAction = () => navigation.navigate(route);

    return (
        <Card onPress={handleAction} style={{ margin: 10 }}>
            <Card.Content
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    <Avatar.Image source={avatar} />
                    <View style={{ paddingLeft: 9 }}>
                        <Text style={{ color: "#000", fontSize: 16, fontFamily: Fonts.medium }}>
                            {name}
                        </Text>
                        <Text style={{ fontSize: 14 }}>Cadiologist</Text>
                        <View
                            style={{
                                flexDirection: "row"
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>{distance}km away</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Icon name="ios-star" size={17} color="#7E44F6" />
                        <Text
                            style={{
                                color: "#7E44F6",
                                paddingLeft: 4,
                                fontSize: 16
                            }}
                        >
                            {review}
                        </Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
};

export default withNavigation(docCard);
