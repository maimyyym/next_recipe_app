import { useState } from "react";

type UseSidebarResult = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const useSidebar = (): UseSidebarResult => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return { isSidebarOpen, openSidebar, closeSidebar };
};
