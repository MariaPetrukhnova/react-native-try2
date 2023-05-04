import { View, StyleSheet, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Pressable} from "react-native";
import Background from "../Components/Background";
import { titleFontFamily, orangeAccent, whiteContrastColor, mainFontFamily, mainFontColor, servicesText, secondaryBgColor, borderColor } from "../Components/Constants";
import Btn from "../Components/Btn";
import Field from "../Components/Field";
import RelinkText from "../Components/relinkText";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import { useState } from "react";


const LoginView = (props) => {
    const { container, title } = styles;
    const { passwordVisibility, handlePasswordVisibility } = useTogglePasswordVisibility();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        console.log("Credentials", `${email} + ${password}`);
    };


    return (
        <Background>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{flex:1}}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={container}>
                        <Text style={title}>Log in</Text>
                        <Field name='email' onChangeText={setEmail} placeholder='Email' keyboardType={'email-address'} />
                        <View style={styles.inputContainer}>
                            <Field name='password' onChangeText={setPassword} placeholder={'Password'} secureTextEntry={passwordVisibility} keyboardType={'default'}  style={styles.inputField} />
                            <Pressable onPress={handlePasswordVisibility} style={{position:'absolute', right: '0%', paddingHorizontal:8 }}>
                                <Text style={{ color: servicesText }}>Show</Text>
                            </Pressable>
                        </View>
                        <Btn btnLabel="Log in" bgColor={orangeAccent} textColor={whiteContrastColor} textFont={mainFontFamily} ф/>
                        <RelinkText
                            textFont={mainFontFamily} textColor={servicesText} textLink="Don't you have an account? Sign up"
                            Press={() => props.navigation.navigate("Signup")}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Background>
    )
};

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        paddingBottom: 145,
        paddingHorizontal: 16,
        top: '45%',
    },
    title: {
        fontFamily: titleFontFamily,
        color: mainFontColor,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        paddingVertical: 32,
    },
      inputContainer: {
        width: '100%',
        marginBottom: 16,
        fontSize: 14,
        fontFamily: mainFontFamily,
        backgroundColor: secondaryBgColor,
        lineHeight: 19,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default LoginView;