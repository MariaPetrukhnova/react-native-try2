import { View, StyleSheet, Text, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Pressable, TouchableOpacity} from "react-native";
import Background from "../Components/Background";
import { titleFontFamily, orangeAccent, whiteContrastColor, mainFontFamily, mainFontColor, servicesText } from "../Components/Constants";
import Field from "../Components/Field";
import RelinkText from "../Components/relinkText";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import { useState } from "react";


const LoginView = (props) => {
    const { container, title, inputContainer, formBtn } = styles;
    const { passwordVisibility, handlePasswordVisibility } = useTogglePasswordVisibility();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        const userObj = { email: email, password: password };
        console.log(userObj);
        props.navigation.navigate("Home");
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
                        <View style={inputContainer}>
                            <Field name='password' onChangeText={setPassword} placeholder={'Password'} secureTextEntry={passwordVisibility} keyboardType={'default'}  style={styles.inputField} />
                            <Pressable onPress={handlePasswordVisibility} style={{position:'absolute', top: '25%', right: '0%', paddingHorizontal: 10 }}>
                                <Text style={{ color: servicesText }}>Show</Text>
                            </Pressable>
                        </View>
                        <TouchableOpacity title="Sign up" style={formBtn} onPress={onLogin}>
                            <Text style={styles.btnText}>Log in</Text>
                        </TouchableOpacity>
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
        fontSize: 14,
        fontFamily: mainFontFamily,
        flexDirection: 'row',
        alignItems: 'center',
    },
    formBtn: {
        backgroundColor: orangeAccent,
        alignItems: 'center',
        width: '100%',
        paddingVertical: 16,
        marginBottom: 16,
        marginTop: 27,
        fontSize: 16,
        borderRadius: 100,
    },
    btnText: {
        fontFamily: mainFontFamily,
        color: whiteContrastColor,
        fontSize: 16,
    }
});

export default LoginView;