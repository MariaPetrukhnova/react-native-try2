import Background from "../Components/Background";
import { titleFontFamily, orangeAccent, whiteContrastColor, mainFontFamily, mainFontColor, secondaryBgColor, servicesText } from "../Components/Constants";
import { KeyboardAvoidingView, Platform,   TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet, Pressable } from "react-native";
import Btn from "../Components/Btn";
import Field from "../Components/Field";
import RelinkText from "../Components/relinkText";
import Icon from 'react-native-vector-icons/AntDesign';
import { IconButton } from "@react-native-material/core";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import { useState } from "react";


const RegistrationView = (props) => {
    const { container, title, iconWindow, addIconBtn } = styles;
    const { passwordVisibility, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignup = () => {
        console.log("Credentials", `${login} + ${email} + ${password}`);
    };

    return (
        <Background>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "position"}
                style={{flex:1}} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={container}>

                        <View style={iconWindow} >
                            <View style={{position:'absolute', top: 70, left: 96, width: 25, height: 25}}>
                                <IconButton icon={props => <Icon name="pluscircleo" {...props} style={addIconBtn} />} />
                            </View>
                        </View>
                        <Text style={title}>Sign up</Text>
                        <Field name='login' onChangeText={setLogin} placeholder='Login' keyboardType={'name-phone-pad'} />
                        <Field name='email' onChangeText={setEmail} placeholder='Email' keyboardType={'email-address'} />
                        <View style={styles.inputContainer}>
                            <Field name='password' onChangeText={setPassword} placeholder={'Password'} secureTextEntry={passwordVisibility} keyboardType={'visible-password'}  style={styles.inputField} />
                            <Pressable onPress={handlePasswordVisibility} style={{position:'absolute', right: '0%', paddingHorizontal: 8 }}>
                                <Text style={{ color: servicesText }}>Show</Text>
                            </Pressable>
                        </View>
                        <Btn btnLabel="Sign up" bgColor={orangeAccent} textColor={whiteContrastColor} textFont={mainFontFamily} onPress={onSignup}/>
                        <RelinkText 
                            textFont={mainFontFamily} textColor={servicesText} textLink="Do you already have an account? Log in"
                            Press={() => props.navigation.navigate("Login")}
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
        paddingBottom: 80,
        paddingHorizontal: 16,
        top: '32%',
    },
    title: {
        fontFamily: titleFontFamily,
        color: mainFontColor,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        marginVertical: 32,
    },
    iconWindow: {
        backgroundColor: secondaryBgColor,
        borderRadius: 16,
        width: 120,
        height: 120,
        marginTop: -60,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    addIconBtn: {
        width: 25,
        height: 25,
        color: orangeAccent,
        backgroundColor: whiteContrastColor,
        borderRadius: 100,
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

export default RegistrationView;