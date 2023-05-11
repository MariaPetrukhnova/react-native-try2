import { TextInput, KeyboardAvoidingView, Platform,   TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { borderColor, mainFontFamily, orangeAccent, secondaryBgColor, whiteContrastColor } from "./Constants";
import { useState } from "react";


const Field = (props) => {
    const [isFocused, setIsFocused] = useState('false');
    const [isBlured, setIsBlured] = useState('true');
    const { onChangeField } = props;

    const handleInput = (text) => {
        onChangeField(text)
    }

    return (
        <TextInput
            onChangeText={handleInput}
            {...props}
            style={{
                borderRadius: 8,
                borderStyle: 'solid',
                borderWidth: 1,
                padding: 16,
                backgroundColor: isFocused === true ? whiteContrastColor : secondaryBgColor,
                borderColor: isFocused === true ? orangeAccent : borderColor,
                width: '100%',
                fontSize: 14,
                fontFamily: mainFontFamily,
                lineHeight: 19,
                marginBottom: 16,
            
            }}
        />
    )
};


export default Field;