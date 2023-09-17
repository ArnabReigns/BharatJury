import React, { useEffect, useState } from "react";

const Colorpanel = ({ config }) => {
  const [isColorPanelVisible, setColorPanelVisibility] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "/") {
        setColorPanelVisibility((prevVisibility) => !prevVisibility);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      {isColorPanelVisible && (
        <div className="colorpanel">
          <p>@Reigns color panel</p>
          {config.map((c, idx) => (
            <div className="panel" key={idx}>
              <label htmlFor="">{c}</label>
              <input
                type="color"
                defaultValue={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(`--${c}`)}
                onChange={(e) =>
                  document.documentElement.style.setProperty(
                    `--${c}`,
                    e.target.value
                  )
                }
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Colorpanel;
