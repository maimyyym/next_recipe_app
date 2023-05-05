import React, {ReactNode} from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    // classNameの値をpropsとする場合はデザインの内容を定義する。
    return (
        <button className="h-8 p-1 m-1 bg-white border-l w-28 rounded-xl border-lightGray"
        onClick={onClick}>{children}</button>
    );
};

