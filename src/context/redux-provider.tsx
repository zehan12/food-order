"use client";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@/redux/store";

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
                {children}
        </Provider>
    );
};
