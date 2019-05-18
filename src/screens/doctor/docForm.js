import React from "react";
import { View, Text, StyleSheet, TextInput, Picker } from "react-native";
import Appbar from "../../components/appbar/appbar";
import { Button, IconButton } from "react-native-paper";
import Fonts from "../../constants/Fonts";
import Loader from "../../components/loader/loader";
import Axios from "axios";

const docForm = ({ navigation }) => {
    const [showLoader, setShowLoader] = React.useState(false);
    const [doctorType, setDocType] = React.useState({
        speciality: "Cadiologist",
        gender: "Male"
    });
    const [doctors, setDoctors] = React.useState([]);

    const handleFindDoctor = () => {
        setShowLoader(true);
        // Axios.get("")
        //     .then(res => setDoctors(res.data))
        //     .catch(e => e);
        setTimeout(() => {
            navigation.navigate("docList", {
                // doctors: doctors
            });
            setShowLoader(false);
        }, 1000);
    };

    return (
        <React.Fragment>
            <Appbar notDashboard={true} title="Find Doctor" />
            <Text
                style={{ padding: 30, textAlign: "left", fontFamily: Fonts.regular, fontSize: 25 }}
            >
                FEELING TIRED? FIND A DOCTOR.
            </Text>
            <View style={{ padding: 20 }}>
                <Picker
                    onValueChange={value => setDocType({ speciality: value })}
                    selectedValue={doctorType.speciality}
                >
                    <Picker.Item label="Cadiologist" value="Cadiologist" />
                    <Picker.Item label="Neurosurgeon" value="Neurosurgeon" />
                    <Picker.Item label="Dentist" value="Dentist" />
                    <Picker.Item label="Specialist" value="Specialist" />
                    <Picker.Item label="Opthamologist" value="Opthamologist" />
                    <Picker.Item label="" value="" />
                </Picker>
                <Picker
                    onValueChange={value => setDocType({ gender: value })}
                    seletedValue={doctorType.gender}
                >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 5
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 13 }}>Your Current Location</Text>
                        <Text style={{ fontSize: 14, fontFamily: Fonts.medium, color: "#000" }}>
                            Ugbowo Benin
                        </Text>
                    </View>
                    <Text style={{ fontSize: 13, color: "#7E44F6" }}>Edit</Text>
                </View>
            </View>
            <Button
                onPress={handleFindDoctor}
                style={styles.Button}
                mode="contained"
                color="#7E44F6"
            >
                FIND NOW
            </Button>
            <Loader visible={showLoader} loadingText="Finding Doctors Near You..." />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 25,
        borderWidth: 1,
        fontSize: 16,
        height: 44,
        marginTop: 12,
        paddingLeft: 12,
        borderColor: "#949494",
        fontFamily: Fonts.regular
    },
    Button: {
        borderRadius: 20,
        marginHorizontal: 20,
        fontFamily: Fonts.regular,
        marginTop: 100
    }
});

export default docForm;
