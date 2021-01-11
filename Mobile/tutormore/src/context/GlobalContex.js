import React, {useState, createContext, useContext, useMemo} from "react";
import {useReducer} from "react";
import axios from "axios";

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
                    const user_token = await axios.post(
                        "http://192.168.1.62:3986/api/auth/signin",
                        {
                            email: data.email,
                            password: data.password,
                        }
                    );
                    console.log("data signin from Global state", data);
                    setUserInfo(user_token.data);
                    dispatch({type: "SIGN_IN", token: user_token.data.accessToken});
                } catch (error) {
                    //TODO Cath error to show on UI
                    console.error(error);
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
