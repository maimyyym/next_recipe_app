import React, {ReactNode} from "react";

export type TextProps = {
    children: ReactNode;
};

export const Text: React.FC<TextProps> = ({children}) => {
    return (
	<div>
        <p className="text-sm text-black">{children}</p>
	</div>
    );
};

