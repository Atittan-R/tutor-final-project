import React, { useState, createContext, useContext, useMemo } from "react";
import { useReducer } from "react";
import axios from "axios";

const GlobalVarContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [current_user, setUserInfo] = useState();

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
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const checkUser = async (username, password) => {};

  const auth = useMemo(
    () => ({
      signIn: async (data) => {
        try {
          const user_token = await axios.post(
            "http://localhost:9002/api/auth/signin",
            {
              username: data.username,
              password: data.password,
            }
          );

          console.log("data signin from Global state", data);
          dispatch({ type: "SIGN_IN", token: user_token.data.accessToken });
        } catch (error) {
          console.error(error);
        }
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
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
