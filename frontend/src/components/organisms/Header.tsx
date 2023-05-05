import React from "react";
import Image from "next/image";
import { NavLink } from "../atoms/elements";

export type HeaderProps = {

};

export const Header: React.FC<HeaderProps> = () => {
    return (
	<div className="fixed top-0 left-0 w-full m-auto h-60 bg-darkGray">
        <div className="absolute flex items-end bottom-6 left-6">
            <Image src="/next.svg" width={100} height={100} alt="logo" />
            <div className="justify-between ml-6">
                <NavLink href="/">レシピを投稿する</NavLink>
                <NavLink href="/">レシピを投稿する</NavLink>
                <NavLink href="/">レシピを投稿する</NavLink>
                <NavLink href="/">レシピを投稿する</NavLink>
            </div>
        </div>
	</div>
    );
};

