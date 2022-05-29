import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToProjectsSection = () => {
    const target = document.querySelector(".projects-section-scroll-target");
    if (isSidebarOpen) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 600);
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsSidebarOpen(false);
  };

  const scrollToExperienceSection = () => {
    const target = document.querySelector(".experience-section-scroll-target");
    if (isSidebarOpen) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 600);
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsSidebarOpen(false);
  };

  const scrollToContactSection = () => {
    const target = document.querySelector(".contact-section-scroll-target");
    if (isSidebarOpen) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 600);
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        scrollToProjectsSection,
        scrollToExperienceSection,
        scrollToContactSection,
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
