import * as React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Routes from "./src/Navigations/Routes";
import {GlobalProvider} from "./src/context/GlobalContex";

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        "Promp-Light": require("./src/assets/fonts/Prompt-Light.ttf"),
        "Promp-Black": require("./src/assets/fonts/Prompt-Black.ttf"),
        "Promp-Regular": require("./src/assets/fonts/Prompt-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <GlobalProvider>
                <Routes/>
            </GlobalProvider>
        );
    }


}
