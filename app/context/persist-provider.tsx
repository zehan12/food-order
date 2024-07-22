"use client";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";
import { persistor } from "@/app/redux/store";

export const PersistProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </>
    );
};
