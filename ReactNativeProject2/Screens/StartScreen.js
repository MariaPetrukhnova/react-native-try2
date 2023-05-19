import { View, StyleSheet, Text } from "react-native";
import Background from "../Components/Background";
import Btn from "../Components/Btn";
import {orangeAccent, whiteContrastColor, mainFontFamily, titleFontFamily, } from '../Components/Constants'

const StartView = (props) => {
    const { container, title } = styles;
    return (
    <Background>
        <View style={container}>
            <Text style={title}>Welcome to MemoryPic Application</Text>
            <Btn btnLabel="Login" bgColor={orangeAccent} textColor={whiteContrastColor} textFont={mainFontFamily}
                    Press={() => props.navigation.navigate("Login")}
            />
            <Btn btnLabel="Signup" bgColor={orangeAccent} textColor={whiteContrastColor} textFont={mainFontFamily}
                    Press={() => props.navigation.navigate("Signup")}
            />
        </View>
    </Background>
    )
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 100,
        alignItems: 'stretch'
    },
    title: {
        fontSize: 30,
        fontFamily: titleFontFamily,
        textAlign: 'center',
        marginBottom: 300
    }
});

export default StartView;