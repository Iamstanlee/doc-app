import React from "react";
import { withNavigation } from "react-navigation";
import { TextInput, Picker, Text, View } from "react-native";
import Dialog from "./dialog";
import { Button } from "react-native-paper";

const bookDialog = props => {
    return (
        <Dialog visible={props.visible}>
            <View>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: "left"
                    }}
                >
                    Available Times
                </Text>
                <Picker
                // onValueChange={value => setDocType({ speciality: value })}
                // selectedValue={doctorType.speciality}
                >
                    <Picker.Item label="8am-10am" value="8am-10am" />
                    <Picker.Item label="2pm-4pm" value="2pm-4pm" />
                    <Picker.Item label="6pm-8pm" value="6pm-8pm" />
                </Picker>
                <TextInput multiline={true} placeholder="Appointments details" />
            </View>

            <Button>Book</Button>
        </Dialog>
    );
};

export default withNavigation(bookDialog);
