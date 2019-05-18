import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, Avatar, Button, IconButton } from "react-native-paper";
import Appbar from "../../components/appbar/appbar";
import Fonts from "../../constants/Fonts";
import BookDialog from "../../components/dialog/bookDialog";

const doctor = () => {
    const [booking, setBooking] = React.useState(false);

    const handleBooking = () => {
        setBooking(true);
    };

    return (
        <React.Fragment>
            <Appbar notDashboard={true} title="Doctor Profile" />
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: 20
                    }}
                >
                    <IconButton icon="phone" size={25} />
                    {/* <Avatar.Text size={100}>MH</Avatar.Text> */}
                    <Avatar.Image size={100} source={require("../../assets/avatars/ax.png")} />
                    <IconButton icon="mail-outline" size={25} />
                </View>
                <Text
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontFamily: Fonts.medium,
                        fontSize: 18
                    }}
                >
                    Raymond Fisher
                </Text>
                <Text style={{ textAlign: "center", fontSize: 16 }}>Cadiologist</Text>
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
                            paddingLeft: 5,
                            fontSize: 16
                        }}
                    >
                        4.6 <Text>( 345 Reviewers )</Text>
                    </Text>
                </View>
                <Card style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Card.Content
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="ios-person" size={20} color="#7E44F6" />
                            <Text
                                style={{
                                    paddingLeft: 12,
                                    fontSize: 16
                                }}
                            >
                                Personal Information
                            </Text>
                        </View>

                        <IconButton icon="chevron-right" size={30} color="#949494" />
                    </Card.Content>
                </Card>
                <Card style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <Card.Content
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="ios-home" size={20} color="#7E44F6" />
                            <Text
                                style={{
                                    paddingLeft: 12,

                                    fontSize: 16
                                }}
                            >
                                Working Address
                            </Text>
                        </View>

                        <IconButton icon="chevron-right" size={30} color="#949494" />
                    </Card.Content>
                </Card>
                <Button
                    onPress={handleBooking}
                    style={{
                        borderRadius: 20,
                        marginHorizontal: 20,
                        marginTop: 25
                    }}
                    mode="contained"
                    color="#7E44F6"
                >
                    Book Appointment
                </Button>
            </View>

            <BookDialog visible={booking} />
        </React.Fragment>
    );
};

export default withNavigation(doctor);
