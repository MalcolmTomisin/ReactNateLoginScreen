import * as React from "react";
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import colors from "../config/colors";

type Props = TextInputProps;

export default class FormTextInput extends React.Component<Props> {
    //ref to store TextInput reference
    textinputRef = React.createRef<TextInput>();

    //callback to focus method
    focus = () => {
        if(this.textinputRef.current) {
            this.textinputRef.current.focus();
        }
    };
    
    render(){
        const {style, ...otherProps} = this.props;
        return (
            <TextInput 
            ref={this.textinputRef}
            selectionColor = {colors.DODGER_BLUE}
            style = {[styles.textInput, style]}
            {...otherProps}/>
        );
    }
}


const styles = StyleSheet.create({
    textInput : {
        height : 40,
        borderColor : colors.SILVER,
        borderBottomWidth : StyleSheet.hairlineWidth,
        marginBottom : 20
    }
});