import React, {ReactNode} from "react";

export type CategoryFilterProps = {
    children: ReactNode;
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ children }) => {
    return (
	<div className="flex-col w-full m-auto">
        <p>▼カテゴリ検索</p>
        <div className="flex justify-between m-8">{children}</div>
	</div>
    );
};

