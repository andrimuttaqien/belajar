import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleOnClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  console.log("[ThemeSwitch] darkMode :", darkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={handleOnClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            color: inherit;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
}
export default ThemeSwitch;
