import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Dialog } from "react-native-paper";

const loader = ({ visible, loadingText }) => {
    return (
        <React.Fragment>
            <Dialog visible={visible} style={{ height: 90 }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}
                >
                    <ActivityIndicator style={{ flex: 1 }} animating color="#7E44F6" size={50} />
                    <Text style={{ flex: 2, textAlign: "left", fontSize: 14, color: "#000" }}>
                        {loadingText}
                    </Text>
                </View>
            </Dialog>
        </React.Fragment>
    );
};

export default loader;
