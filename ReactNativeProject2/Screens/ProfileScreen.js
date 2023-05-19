import { View, StyleSheet, Text } from "react-native"

const ProfileView = () => {
    const { container } = styles;
    return (
    <View style={container}>
        <Text>ProfileView</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
});

export default ProfileView;