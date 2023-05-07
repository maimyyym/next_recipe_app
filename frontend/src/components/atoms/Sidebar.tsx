import React, { ReactNode } from "react";

export type SidebarProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ children, onClick }) => {
  return (
    <div className="fixed top-0 right-0 flex-col w-1/3 h-full m-0 mt-40 bg-white border-l-2 border-lightGray">
      <div className="w-full mb-2 h-7 bg-vividRed" />
      <div className="w-full h-3 mb-1 bg-vividRed" />
      <div className="flex justify-start p-2">
        <button className="text-sm border-none" onClick={onClick}>
          閉じる
        </button>
      </div>
      <div className="justify-center w-full p-6">{children}</div>
    </div>
  );
};
