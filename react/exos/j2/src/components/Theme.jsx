import { useState, useEffect } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    console.log(document.documentElement);
    if (dark) {
      document.documentElement.style.setProperty("--color1", "#281010");
      document.documentElement.style.setProperty("--color2", "#004961");
      document.documentElement.style.setProperty("--color-text", "#FFFFFF");
    } else {
      document.documentElement.style.setProperty("--color1", "#808080");
      document.documentElement.style.setProperty("--color2", "#add8e6");
      document.documentElement.style.setProperty("--color-text", "#000000");
    }
  }, [dark]);

  return (
    <div className="Theme">
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default Theme;
