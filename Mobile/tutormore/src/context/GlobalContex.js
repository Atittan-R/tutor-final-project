import React, {useState, createContext, useContext, useMemo} from "react";
import {useReducer} from "react";
import API from "../services/API"
import {isLoading} from "expo-font";
import {AsyncStorage} from "react-native";

const GlobalVarContext = createContext();

export const GlobalProvider = ({children}) => {
    const [current_user, setUserInfo] = useState();
    const [roleselection, setRoleSection] = useState();

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            //reducer
            switch (action.type) {
                case "RESTORE_TOKEN":
                    return {
                        ...prevState,
                        userToken: action.token,
                        userData: action.user,
                        userRoles: action.r,
                        isLoading: false,
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
                        isLoading: true,
                        userToken: action.token,
                        userData: action.user,
                        userRoles: action.r,
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                        userData: null,
                        userRoles: null,
                        userRole: null
                    };
                case "ROLE_ENTRY":
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                        userRole: action.role,
                    };
            }
        },
        //initial State
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
            userRoles: null,
            userData: null,
            userRole: null,
        }
    );

    const useLogin = async (data) => {
        // console.log("Use Login",data)
        try {
            const user = await API.post(
                "/auth/signin",
                {
                    email: data.email,
                    password: data.password,
                }
            );
            // console.log("User From Login: ", user.data);
            return user;
        } catch (error) {
            //TODO Cath error to show on UI
            // console.error("Hello Error", error.response.data.message);
            alert(error.response.data.message);
        }
    }

    const auth = useMemo(
        () => ({
            signIn: async (data) => {
                // console.log(data)
                try {
                    const user = await useLogin(data);
                    let r = await user.data.roles;
                    // await setUserInfo(user.data)
                    if(user != null){
                        await AsyncStorage.setItem("userData", JSON.stringify(user.data));
                        await AsyncStorage.setItem("userToken", JSON.stringify(user.data.accessToken));
                        await AsyncStorage.setItem("userRoles", JSON.stringify(r));
                    }

                    await dispatch({type: "SIGN_IN", token: user.data.accessToken, user: user.data, r: r});
                } catch (e) {
                    console.log(e)
                }
            },
            signOut: async () => {
                try{
                    await AsyncStorage.removeItem("userData");
                    await AsyncStorage.removeItem("userToken");
                    await AsyncStorage.removeItem("userRoles");
                    await AsyncStorage.removeItem("userRole");
                }catch (e){
                    alert(e)
                }
                dispatch({type: "SIGN_OUT"})
            },
            signUp: async (data) => {
                //TODO Sign Up API
                // console.log("signup:",data)
                const user = await useLogin(data)
                await dispatch({type: "SIGN_IN", token: user.data.accessToken});
                // await console.log("data signup from Global state", data);
            },
            roleEntry: async (data) => {
                setRoleSection(data);
                // await AsyncStorage.setItem("entryRole", JSON.stringify(data.role));
                dispatch({type: "ROLE_ENTRY", role: data.role})
            },
        }),
        []
    );

    return (
        <GlobalVarContext.Provider
            value={{
                authentication: [state, dispatch],
                auth: auth,
                current_user: [current_user, setUserInfo],
                roleglobal: [roleselection, setRoleSection],
            }}>
            {children}
        </GlobalVarContext.Provider>
    );
};

export const useGlobalVar = () => useContext(GlobalVarContext);
