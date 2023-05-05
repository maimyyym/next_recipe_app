import React, {ReactNode} from "react";
import Image from "next/image";
import { RecipeTitle, RecipeCardBox } from "../atoms/recipes";
import Link from "next/link";

export type RecipeCardProps = {
    children: ReactNode;
    src: string;
    alt: string;
    title: string;
    time: string;
    recipeId: string;
    onClick: (recipeId: string) => void;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ children, src, alt, title, time, onClick, recipeId }) => {
    return (
	<div>
        <RecipeCardBox>
            <Image src={src} alt={alt} width={200} height={200} className="mb-4" />
            <RecipeTitle recipeId={recipeId} onClick={onClick}>{title}</RecipeTitle>
            <div className="flex m-1 ml-0"><p>🕑</p><p>{time}</p></div>
            <div className="flex">
                {children}
            </div>
        </RecipeCardBox>
	</div>
    );
};

