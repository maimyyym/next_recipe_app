import React from "react";
import { Main } from "../organisms";
import { Layout } from "../templates/Layout";


export const Page: React.FC = () => {

    return (
	<div>
        <Layout
            mainContent={<Main />}
        />
	</div>
    );
};

