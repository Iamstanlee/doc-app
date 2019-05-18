import React from "react";
import { withNavigation } from "react-navigation";
import { Dialog, Surface } from "react-native-paper";

const dialog = props => {
    return (
        <Dialog visible={props.visible}>
            <Dialog.Content>{props.children}</Dialog.Content>
        </Dialog>
    );
};

export default withNavigation(dialog);
