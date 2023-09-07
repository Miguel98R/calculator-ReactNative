import * as React from "react";
import ButtonCustom from "./Button";
import {View, Text} from "react-native";
import {Styles} from "../styles/GlobalStyles";
import {myColors} from "../styles/colors";



export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null >(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.orange}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>;
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
    };

    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    };

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <ButtonCustom title="C" isGray onPress={clear} />
                <ButtonCustom title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <ButtonCustom title="％" isGray onPress={() => handleOperationPress("％")} />
                <ButtonCustom title="÷" isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <ButtonCustom title="7" onPress={() => handleNumberPress("7")} />
                <ButtonCustom title="8" onPress={() => handleNumberPress("8")} />
                <ButtonCustom title="9" onPress={() => handleNumberPress("9")} />
                <ButtonCustom title="×" isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <ButtonCustom title="4" onPress={() => handleNumberPress("4")} />
                <ButtonCustom title="5" onPress={() => handleNumberPress("5")} />
                <ButtonCustom title="6" onPress={() => handleNumberPress("6")} />
                <ButtonCustom title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <ButtonCustom title="1" onPress={() => handleNumberPress("1")} />
                <ButtonCustom title="2" onPress={() => handleNumberPress("2")} />
                <ButtonCustom title="3" onPress={() => handleNumberPress("3")} />
                <ButtonCustom title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <ButtonCustom title="." onPress={() => handleNumberPress(".")} />
                <ButtonCustom title="0" onPress={() => handleNumberPress("0")} />
                <ButtonCustom title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <ButtonCustom title="=" isBlue onPress={() => getResult()} />
            </View>
        </View>
    );
}