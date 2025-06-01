import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context value
interface LanguageContextType {
  language: string;
  cycleLanguage: () => void;
}

// 2️⃣ Create the context with a default (placeholder) value
const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  cycleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const languages = ['English', '中文'];
  const [language, setLanguage] = useState<string>('English');

  const cycleLanguage = () => {
    const nextIndex = (languages.indexOf(language) + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <LanguageContext.Provider value={{ language, cycleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
