import {useContext} from "react";
import {Text, TouchableOpacity} from "react-native";
import {ThemeContext} from "../context/ThemeContext";
import {Styles} from "../styles/GlobalStyles"

interface ButtonProps {
    onPress: () => void;
    title: String;
    isBlue?: Boolean;
    isGray?: Boolean;

}

export default function ButtonCustom({title, onPress, isBlue, isGray}: ButtonProps) {
    const theme = useContext(ThemeContext)
    return (
        <TouchableOpacity
            style={isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : theme === "light" ? Styles.btnWhite : Styles.btnBlack}
            onPress={onPress}>
            <Text
                style={isBlue || isGray ? Styles.smallTextLight : theme === 'dark' ? Styles.smallTextLight : Styles.smallTextDark}>{title}</Text>


        </TouchableOpacity>
    )
}