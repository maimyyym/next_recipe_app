import { useState } from "react";

type UseToggleResult = {
  isToggleOpen: boolean;
  selectedRecipedId: string | null;
  openToggle: (recipedId: string) => void;
  closeToggle: () => void;
};

export const useToggle = (): UseToggleResult => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [selectedRecipedId, setSelectedRecipeId] = useState<string | "">("");

  const openToggle = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
    setIsToggleOpen(true);
  };

  const closeToggle = () => {
    setSelectedRecipeId("");
    setIsToggleOpen(false);
  };

  return { isToggleOpen, selectedRecipedId, openToggle, closeToggle };
};
