import React, {ReactNode} from "react";

export type IngredientBoxProps = {
    children: ReactNode;
};

export const IngredientBox: React.FC<IngredientBoxProps> = ({ children }) => {
    return (
	<div className="h-auto p-1 m-4 w-96">
        <p className="text-xl text-vividRed">【材料】</p>
        <p className="pl-4">{children}</p>
	</div>
    );
};

