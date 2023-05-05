import Image from "next/image";
import React from "react";

export type RecipeImageProps = {
    src: {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
    };
    alt: string;
    width: number;
    height: number;
};

export const RecipeImage: React.FC<RecipeImageProps> = ({ src, alt, width, height }) => {
    return (
	<div>
        <Image src={src} alt={alt} width={width} height={height} />
	</div>
    );
};

