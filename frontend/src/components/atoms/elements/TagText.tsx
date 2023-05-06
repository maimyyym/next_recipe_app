import React, {ReactNode} from "react";

export type TagTextProps = {
    children: ReactNode;
    onClick: () => void;
    label: string;
    isActive: string[];
};

export const TagText: React.FC<TagTextProps> = ({ label, children, onClick, isActive }) => {

    const activeItems = isActive.includes(label)
    const buttonColor = activeItems ? 'bg-vividRed' : 'bg-white';

    return (
        <button onClick={onClick} className={`inline-block p-0.5 border-2 rounded-lg border-darkGray ${buttonColor}`}>
            <div className="flex">
            <p className="text-darkGray">＃</p><p className="text-darkGray">{children}</p>
            </div>
	</button>
    );
};

