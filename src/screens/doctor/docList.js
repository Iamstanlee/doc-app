import React from "react";
import { View, Text } from "react-native";
import Appbar from "../../components/appbar/appbar";
import Fonts from "../../constants/Fonts";
import DocCard from "./docCard";

const docList = () => {
    return (
        <React.Fragment>
            <Appbar notDashboard={true} title="Doctors" />
            <Text
                style={{
                    fontFamily: Fonts.regular,
                    paddingLeft: 30,
                    marginTop: 10,
                    fontSize: 18
                }}
            >
                Found <Text style={{ color: "#000" }}>14</Text> Doctors near
                <Text style={{ color: "#000" }}> Ugbowo Benin.</Text>
            </Text>
            <View>
                <DocCard
                    route="doctor"
                    distance="0.2"
                    name="John Doe"
                    review="4.8"
                    avatar={require("../../assets/avatars/ax.png")}
                />
                <DocCard
                    route="doctor"
                    distance="1.0"
                    name="May Hampton"
                    review="4.6"
                    avatar={require("../../assets/avatars/bx.png")}
                />
                <DocCard
                    route="doctor"
                    distance="0.7"
                    name="Daniel Chuka"
                    review="3.8"
                    avatar={require("../../assets/avatars/cx.png")}
                />
                <DocCard
                    route="doctor"
                    distance="0.8"
                    name="Raymond Fisher"
                    review="4.6"
                    avatar={require("../../assets/avatars/ax.png")}
                />
            </View>
        </React.Fragment>
    );
};

export default docList;
