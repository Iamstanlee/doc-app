import React from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const fab = () => {
    return <FAB style={styles.container} icon="menu" small color="#383838" />;
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#FFF",
        left: 20,
        top: 20,
        elevation: 12,
        alignItems: "center"
    }
});

export default fab;
