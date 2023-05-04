import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";


export default function Btn({btnLabel, bgColor, textColor, textFont, Press}) {
    return (
        <TouchableOpacity onPress={Press} style={{
            backgroundColor: bgColor,
            borderRadius: 100,
            alignItems: 'center',
            width: '100%',
            paddingVertical: 16,
            marginBottom: 16,
            marginTop: 27,
        }}>
            <Text style={{
                fontFamily: textFont,
                color: textColor,
                fontSize: 16,
            }}
            >{btnLabel}</Text>
        </TouchableOpacity>
    )
}