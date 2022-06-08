import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stateMap, setStateMap] = useState(null);

  const toggleSidebar = () => {
    if (isSidebarOpen) setIsSidebarOpen(false);
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };

  function scrollToTargetAdjusted(targetClassName) {
    const target = document.querySelector(targetClassName);
    const headerOffset = 80;
    const targetPosition = target.getBoundingClientRect().top;
    const offsetPosition = targetPosition + window.pageYOffset - headerOffset;
    if (isSidebarOpen) {
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 400);
    } else {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        scrollToTargetAdjusted,
        toggleSidebar,
        stateMap,
        setStateMap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
