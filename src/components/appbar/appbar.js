import React from "react";
import { Appbar, Badge } from "react-native-paper";
import { withNavigation } from "react-navigation";

import Fonts from "../../constants/Fonts";

const appbar = props => {
    const handleBack = () => props.navigation.goBack();
    if (props.notDashboard) {
        return (
            <Appbar style={{ backgroundColor: "#7E44F6" }}>
                <Appbar.Action icon="arrow-back" onPress={handleBack} />
                <Appbar.Content
                    title={props.title}
                    titleStyle={{ fontFamily: Fonts.medium, fontSize: 20 }}
                />
            </Appbar>
        );
    }
    return (
        <Appbar style={{ backgroundColor: "#7E44F6" }}>
            <Appbar.Content
                title="EDOCARE"
                titleStyle={{ fontFamily: Fonts.medium, fontSize: 18 }}
            />
            <Appbar.Action icon="notifications" />
            <Badge style={{ position: "relative", right: 20, top: -25 }}>4</Badge>
            <Appbar.Action icon="mail" />
            <Badge style={{ position: "relative", right: 20, top: -25 }}>9</Badge>
        </Appbar>
    );
};

export default withNavigation(appbar);
