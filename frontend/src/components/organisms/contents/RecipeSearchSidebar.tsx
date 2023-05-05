import React, {useCallback} from "react";
import { CategoryFilter } from "@/components/molecules/CategoryFilter";
import { TagText } from "@/components/atoms/elements";
import { Sidebar } from "@/components/atoms/Sidebar";

type RecipeSearchProps = {
  selectedCategories: string[];
  onClick: () => void;
  handleCategoryChange: (category: string) => void;
};

export const RecipeSearchSidebar: React.FC<RecipeSearchProps> = ({ selectedCategories, onClick, handleCategoryChange }) => {


    return (
	<div>
        <Sidebar onClick={onClick}>
            <CategoryFilter>
                <TagText onClick={() =>handleCategoryChange("主食")}>主食</TagText>
                <TagText onClick={() =>handleCategoryChange("主菜")}>主菜</TagText>
                <TagText onClick={() =>handleCategoryChange("副菜")}>副菜</TagText>
            </CategoryFilter>
        </Sidebar>
	</div>
    );
};

