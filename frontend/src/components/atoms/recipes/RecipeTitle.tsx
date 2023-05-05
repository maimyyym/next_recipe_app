import React, {ReactNode} from "react";

export type RecipeTitleProps = {
    children: ReactNode;
    recipeId: string;
    onClick: (recipeId:string)=>void;
};

export const RecipeTitle: React.FC<RecipeTitleProps> = ({children, onClick, recipeId}) => {
    return (
        <p className="text-xl" onClick={()=>onClick(recipeId)}>{children}</p>
    );
};

