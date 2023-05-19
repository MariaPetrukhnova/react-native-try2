import Background from "../Components/Background";
import { titleFontFamily, orangeAccent, whiteContrastColor, mainFontFamily, mainFontColor, secondaryBgColor, servicesText } from "../Components/Constants";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Field from "../Components/Field";
import RelinkText from "../Components/relinkText";
import Icon from 'react-native-vector-icons/AntDesign';
import { IconButton } from "@react-native-material/core";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import { useState } from "react";


const RegistrationView = (props) => {
    const { container, title, iconWindow, addIconBtn, inputContainer, formBtn } = styles;
    const { passwordVisibility, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignup = () => {
        const userObj = { name: login, email: email, password: password };
        console.log(userObj);
        props.navigation.navigate("Home");
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
                        <Field name='login' onChangeField={setLogin} value={login} placeholder='Login' keyboardType={'name-phone-pad'} />
                        <Field name='email' value={email} onChangeField={setEmail} placeholder='Email' keyboardType={'email-address'} />
                        <View style={inputContainer}>
                            <Field name='password' onChangeText={setPassword} placeholder={'Password'} secureTextEntry={passwordVisibility} keyboardType={'default'}  style={styles.inputField} />
                            <Pressable onPress={handlePasswordVisibility} style={{position:'absolute', top: '25%', right: '0%', paddingHorizontal: 10 }}>
                                <Text style={{ color: servicesText }}>Show</Text>
                            </Pressable>
                        </View>
                        <TouchableOpacity style={formBtn} onPress={onSignup}>
                            <Text style={styles.btnText}>Sign up</Text>
                        </TouchableOpacity>
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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
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

export default RegistrationView;