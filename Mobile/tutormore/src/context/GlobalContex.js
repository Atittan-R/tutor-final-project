import React, { useState, createContext, useContext, useMemo } from "react";
import { useReducer } from "react";

const GlobalVarContext = createContext();

export const GlobalProvider = ({ children }) => {
  // const [userinfo, setUserInfo] = useState();

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
          };
      }
    },
    //initial State
    {
      isLoading: false,
      isSignout: false,
      userToken: null,
    }
  );

  const auth = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        console.log("data signin from Global state", data);
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        console.log("data signup from Global state", data);
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <GlobalVarContext.Provider
      value={{ authentication: [state, dispatch], autho: auth }}
    >
      {children}
    </GlobalVarContext.Provider>
  );
};

export const useGlobalVar = () => useContext(GlobalVarContext);
