import React, {ReactNode} from "react";

export type RecipeDetailTitleProps = {
    children: ReactNode;
};

export const RecipeDetailTitle: React.FC<RecipeDetailTitleProps> = ({ children }) => {
    return (
	<p className="text-2xl">
        {children}
	</p>
    );
};

