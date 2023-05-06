import React, {ReactNode} from "react";
import { Header } from "../organisms";
import { Main } from "../organisms";

type LayoutProps = {
    mainContent: ReactNode;

}

export const Layout: React.FC<LayoutProps> = ({ mainContent }) => {

    return (
	<div>
        <Header />
        <div className="h-screen mt-40">
            {mainContent}
        </div>
	</div>
    );
};


