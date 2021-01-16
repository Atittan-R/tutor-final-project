import React, {useState, createContext, useContext, useMemo} from "react";
import {useReducer} from "react";
import API from "../services/API"
import {isLoading} from "expo-font";

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
                        isLoading: false,
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
                        isLoading: true,
                        userToken: action.token,
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                        userRole: null,
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
            userRole: null,
        }
    );

    const auth = useMemo(
        () => ({
            signIn: async (data) => {
                try {
                    const user_token = await API.post(
                        "/auth/signin",
                        {
                            email: data.email,
                            password: data.password,
                        }
                    );
                    console.log("Log: ", user_token.data);
                    setUserInfo(user_token.data)
                    dispatch({type: "SIGN_IN", token: user_token.data.accessToken, isLoading: false});
                } catch (error) {
                    //TODO Cath error to show on UI
                    // console.error("Hello Error",error);
                    console.log('====================================');
                    console.log(error);
                    console.log('====================================');
                    alert(error.message);
                }
            },
            signOut: () => dispatch({type: "SIGN_OUT"}),
            signUp: async (data) => {
                //TODO Sign Up API
                console.log("data signup from Global state", data);
                dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
            },
            roleEntry: async (data) => {
                setRoleSection(data);
                dispatch({type: "ROLE_ENTRY", role: data})
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
            }}
        >
            {children}
        </GlobalVarContext.Provider>
    );
};

export const useGlobalVar = () => useContext(GlobalVarContext);
