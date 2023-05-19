import { View, StyleSheet, Text } from "react-native"

const CommentsView = () => {
    const { container } = styles;
    return (
    <View style={container}>
        <Text>CommentsView</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
});

export default CommentsView;