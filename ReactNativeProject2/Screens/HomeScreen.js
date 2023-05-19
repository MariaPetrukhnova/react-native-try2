import { View, StyleSheet } from "react-native";

// import MyTabs from "../Components/TabNavigator";
import MyTabs from "../Components/TabNavigator2";

const HomeView = () => {
    const { container } = styles;
    return (<>
    <View style={container}/>
    <MyTabs/>
    </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 44,

    },
});

export default HomeView;