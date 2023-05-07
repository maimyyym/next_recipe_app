import React from "react";
import { Input, Button, Label } from "../atoms/elements";

export type RecipeFormProps = {
  value: string;
};

export const RecipeForm: React.FC<RecipeFormProps> = ({ value }) => {
  return (
    <div className="flex-col">
      <Label htmlFor="Title">Title</Label>
      <Input type="text" name="Title" value={value} />
    </div>
  );
};
