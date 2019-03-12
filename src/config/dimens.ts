import {Dimensions} from "react-native"

const {height, width} = Dimensions.get("window");

 const dimens = {
    DEVICE_WIDTH : width,
    DEVICE_HEIGHT : height
};

export default dimens;