import React, { useState, createContext, useContext, useMemo } from "react";
import { useReducer } from "react";
import API from "../services/API"
import { isLoading } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';

const GlobalVarContext = createContext();

export const GlobalProvider = ({ children }) => {
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
                        isLoading: true,
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
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
                        isLoading: true,
                        isSignout: false,
                        userToken: action.token,
                        userRole: action.role,
                    };
                case "SET_LOADING":
                    return {
                        ...prevState,
                        isLoading: action.loading,
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
        console.log("Use Login", data)
        try {
            const user = await API.post(
                "/auth/signin",
                {
                    email: data.email,
                    password: data.password,
                }
            );
            console.log("User From Login: ", user.data);
            if (user) {
                await AsyncStorage.setItem("userData", JSON.stringify(user.data));
                await AsyncStorage.setItem("userToken", JSON.stringify(user.data.accessToken));
                await AsyncStorage.setItem("userRoles", JSON.stringify(user.data.roles));
                return user;
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const auth = useMemo(
        () => ({
            signIn: async (data) => {
                // console.log("Hello",data)
                try {
                    const user = await useLogin(data);
                    // console.log(user)
                    await dispatch({ type: "SIGN_IN", token: user.data.accessToken, user: JSON.stringify(user.data), r: JSON.stringify(user.data.roles) });
                } catch (e) {
                   log("sign in: ",e.message)
                }
            },
            signOut: async () => {
                try {
                    await AsyncStorage.removeItem("userData");
                    await AsyncStorage.removeItem("userToken");
                    await AsyncStorage.removeItem("userRole");
                    await AsyncStorage.removeItem("userRoles");
                } catch (e) {
                    alert(e)
                }
                dispatch({ type: "SIGN_OUT" })
            },
            signUp: async (data) => {
                // console.log("data signup from Global state", data)
                const user = await useLogin(data);
                dispatch({ type: "SIGN_IN", token: user.data.accessToken, user: user.data, r: JSON.stringify(user.data.roles) });
            },
            roleEntry: async (data) => {
                // dispatch({type: "ROLE_ENTRY", role: data.role})
            },

        }),
        []
    );

    return (
        <GlobalVarContext.Provider
            value={{
                authentication: [state, dispatch],
                auth: auth,
            }}>
            {children}
        </GlobalVarContext.Provider>
    );
};

export const useGlobalVar = () => useContext(GlobalVarContext);