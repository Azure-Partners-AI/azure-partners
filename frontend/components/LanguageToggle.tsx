import React from "react";
import { useState, useContext } from "react";

const LanguageToggle = () => {
  const languages = ["English", "中文"];

  const [language, setLanguage] = useState("English");

  return (
    <div
      className="text-white font-bold"
      onClick={() => {
        const nextIndex = (languages.indexOf(language) + 1) % languages.length;
        setLanguage(languages[nextIndex]);
      }}
    >
      {language}
    </div>
  );
};

export default LanguageToggle;
