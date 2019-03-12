import * as React from "react"
import { StyleSheet, Image, View, KeyboardAvoidingView} from "react-native";
import Button from "../components/button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../../assets/images/ic_library.png";
import colors from "../config/colors";
import strings from "../config/strings";




interface State {
    email: string;
    password : string;
}


export default class LoginScreen extends React.Component<{}, State>{
    //creating a React ref for storing FormTextinput ref
passwordInputRef = React.createRef<FormTextInput>();
    
    readonly state: State = {
        email : "",
        password : ""
    };

    handleEmailChange = (email : string) => {
        this.setState({email : email});
    };

    handlePasswordChange = (password : string) => {
        this.setState({password : password });
    };

    handleEmailSubmitPress = () => {
        if (this.passwordInputRef.current){
            this.passwordInputRef.current.focus();
        }
    };

    handleLoginPress = () => {
        console.log("Button Pressed");
    };

    render(){

        return (
        <KeyboardAvoidingView
         style={styles.container}
         behavior="padding" enabled>
            <Image source={imageLogo} style = {styles.logo}/>
                <View style={styles.form}>
                    <FormTextInput
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    placeholder={strings.EMAIL_PLACEHOLDER}
                    onSubmitEditing = {this.handleEmailSubmitPress}
                    autoCorrect={false}
                    keyboardType = "email-address"
                    returnKeyType="next"
                    />
                    <FormTextInput
                    ref={this.passwordInputRef}
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    placeholder={strings.PASSWORD_PLACEHOLDER}
                    secureTextEntry={true}
                    returnKeyType="done"
                    />
                    <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
                </View>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.WHITE,
        alignItems : "center",
        justifyContent : "space-between"
    },
    logo : {
        flex : 1,
        width : "100%",
        resizeMode : "contain",
        alignSelf : "center"
    },
    form : {
        flex : 1,
        justifyContent : "center",
        width : "80%"
    }
});

