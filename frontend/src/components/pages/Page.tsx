import React from "react";
import { MainContent } from "../organisms";
import { Layout } from "../templates/Layout";

export const Page: React.FC = () => {
  return (
    <div>
      <Layout mainContent={<MainContent />} />
    </div>
  );
};
