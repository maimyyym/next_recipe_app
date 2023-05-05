import React, {ReactElement} from "react";
import { Header } from "../organisms/Header";
import { Main } from "next/document";

export type LayoutProps = {
};

export const Layout: React.FC<LayoutProps> = () => {
    return (
    <>
        <Header />
        <Main />
    </>
    );
};

