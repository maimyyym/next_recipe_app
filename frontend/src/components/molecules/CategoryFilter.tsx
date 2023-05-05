import React, {ReactNode} from "react";

export type CategoryFilterProps = {
    children: ReactNode;
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ children }) => {
    return (
	<div className="flex-col w-full m-8">
        <p>▼カテゴリ検索</p>
        <div className="flex justify-between">{children}</div>
	</div>
    );
};

