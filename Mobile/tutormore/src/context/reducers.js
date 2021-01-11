export default reducers = () => {
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
};
