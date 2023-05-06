import React, {ReactNode} from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className="p-2 bg-white border-2 border-solid hover:bg-lightGray hover:text-white rounded-xl border-lightGray"
        onClick={onClick}>{children}</button>
    );
};

