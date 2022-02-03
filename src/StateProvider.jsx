import React, {createContext, useContext, useReducer} from "react";

//准备dataLayer
export const StateContext = createContext();

//封装app 提供Data Layer

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// 下载数据

export const useStateValue = () => useContext(StateContext);
