import { View, StyleSheet, Text } from "react-native";
import { mainFontFamily, additionalGray } from "../Components/Constants";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';

const CreateCreatePostsView = () => {
    const { container, header, headerTitle, logoutIconBtn, headerIcon } = styles;
    const navigation = useNavigation();
    return (
        <View>
            <View style={header}>
                <View style={headerIcon}>
                    <IconButton onPress={()=>navigation.navigate("Posts")} icon={props => <Icon name="arrow-back" {...props} style={logoutIconBtn} />} />
                </View>
                <Text style={headerTitle}>Create post</Text>
            </View>
            <View style={container}></View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    header: {
        position: 'relative',
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: additionalGray,
        padding: 10,
        backgroundColor: 'white',
    },
    headerTitle: {
        fontFamily: mainFontFamily,
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        color: "#212121",
        marginTop: 'auto',
    },
    headerIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 24,
        height: 24,
    },
    logoutIconBtn: {
        width: 24,
        height: 24,
        color: additionalGray,
    }
});

export default CreateCreatePostsView;