import React, {ReactNode} from "react";

export type RecipeCardBoxProps = {
    children: ReactNode;
};

export const RecipeCardBox: React.FC<RecipeCardBoxProps> = ({children}) => {
    return (
	<div className="p-4 rounded-lg shadow-md w-60 h-96">
        {children}
	</div>
    );
};

