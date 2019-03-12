import * as React from "react"
import { StyleSheet, Image, View} from "react-native";
import Button from "../components/button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../../assets/images/ic_launcher_round.png";
import colors from "../config/colors";
import strings from "../config/strings";

interface State {
    email: string;
    password : string;
}


export default class LoginScreen extends React.Component<{}, State>{
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

    handleLoginPress = () => {
        console.log("Button Pressed");
    };

    render(){

        return (
        <View style={styles.container}>
            <Image source={imageLogo} style = {styles.logo}/>
                <View style={styles.form}>
                    <FormTextInput
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    placeholder={strings.EMAIL_PLACEHOLDER}
                    />
                    <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
                </View>
        </View>
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

