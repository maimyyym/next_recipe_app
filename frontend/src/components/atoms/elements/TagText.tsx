import React, {ReactNode} from "react";

export type TagTextProps = {
    children: ReactNode;
    onClick: (category: string) => void;
};

export const TagText: React.FC<TagTextProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="inline-block p-0.5 border-2 rounded-lg border-darkGray">
            <div className="flex">
            <p className="text-darkGray">＃</p><p className="text-darkGray">{children}</p>
            </div>
	</button>
    );
};

