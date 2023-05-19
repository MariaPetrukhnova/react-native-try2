import { View, StyleSheet, Text } from "react-native"

const MapView = () => {
    const { container } = styles;
    return (
    <View style={container}>
        <Text>MapView</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
});

export default MapView;