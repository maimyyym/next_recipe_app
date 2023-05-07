import React from "react";
import Image from "next/image";
import { NavLink } from "../atoms/elements";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-40 m-auto border-b-2 bg-lightGray z-100 border-vividRed">
      <div className="absolute flex items-end bottom-6 left-6">
        <Image src="/logo.jpg" width={100} height={100} alt="logo" />
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
