import { View, ImageBackground } from "react-native";
import bgPic from "../assets/PhotoBG.jpg"

const Background = ({children}) => {
    return (
    <View>
            <ImageBackground source={bgPic} style={{height:'100%' }} />
            <View style={{ position: 'absolute', width:'100%' }}>
                {children}
            </View>
    </View>
    )
};

export default Background;