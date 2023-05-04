import { Text } from "react-native";
import React from "react";


export default function RelinkText({textLink, textColor, textFont, Press}) {
    return (
        <Text onPress={Press} style={{
            color: textColor,
            fontSize: 16,
            fontFamily: textFont,
        }}>
            {textLink}
        </Text>
    )
}