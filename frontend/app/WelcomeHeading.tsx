"use client";

import { useState, useEffect } from "react";

import React from "react";

const WelcomeHeading = () => {
  const actionItems = [
    { title: "Welcome to Azure Partners!", route: "/en/programs" },
    { title: "欢迎您来到 Azure Partners!", route: "/en/offerings" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentKey, setCurrentKey] = useState(0); // Unique key to trigger AnimatePresence

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % actionItems.length;
        setCurrentKey((k) => k + 1); // Change key to re-render animation
        return newIndex;
      });
    }, 3000); // 3 seconds with smooth transition

    return () => clearInterval(interval);
  }, []);

  const currentItem = actionItems[currentIndex];
  return (
    <h1 className="text-4xl font-bold mb-6 text-center">{currentItem.title}</h1>
  );
};

export default WelcomeHeading;
