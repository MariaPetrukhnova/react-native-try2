import { TextInput, KeyboardAvoidingView, Platform,   TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { borderColor, mainFontFamily, orangeAccent, secondaryBgColor, whiteContrastColor } from "./Constants";
import { useState } from "react";


const Field = (props) => {
    const [isFocused, setIsFocused] = useState('false');
    const [isBlured, setIsBlured] = useState('true');
    const { name } = props;

    if (name !== 'password') {
        return (
            <TextInput
                onFocus={() => { setIsFocused(true); setIsBlured(false) }}
                onBlur={() => { setIsFocused(false); setIsBlured(true) }}
                {...props}
                style={{
                    borderRadius: 8,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 16,
                    marginBottom: 16,
                    backgroundColor: isFocused === true ? whiteContrastColor : secondaryBgColor,
                    // outlineColor: isFocused === true ? orangeAccent : borderColor,
                    borderColor: isFocused === true ? orangeAccent : borderColor,
                    width: '100%',
                    fontSize: 14,
                    fontFamily: mainFontFamily,
                    lineHeight: 19,
                }}
            />
        )
    } else {
                return (
            <TextInput
                onFocus={() => { setIsFocused(true); setIsBlured(false) }}
                onBlur={() => { setIsFocused(false); setIsBlured(true) }}
                {...props}
                style={{
                    borderRadius: 8,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    padding: 16,
                    backgroundColor: isFocused === true ? whiteContrastColor : secondaryBgColor,
                    // outlineColor: isFocused === true ? orangeAccent : borderColor,
                    borderColor: isFocused === true ? orangeAccent : borderColor,
                    width: '100%',
                    fontSize: 14,
                    fontFamily: mainFontFamily,
                    lineHeight: 19,
                }}
            />
        )
    }

};

export default Field;