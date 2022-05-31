import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function scrollToTargetAdjusted(targetClassName) {
    const target = document.querySelector(targetClassName);
    const headerOffset = 80;
    const targetPosition = target.getBoundingClientRect().top;
    const offsetPosition = targetPosition + window.pageYOffset - headerOffset;
    console.log(
      `target: ${target}, headerOffset: 80, targetPosition: ${targetPosition}, offsetPosition: ${offsetPosition}, window.pageYOffset: ${window.pageYOffset}`
    );
    if (isSidebarOpen) {
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 600);
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
