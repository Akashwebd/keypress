import React, { useState, useMemo } from "react";
import { KeyboardContext } from "./Provider";

function ReactKeypress({ children }) {
  const [keypressInfo, setKeyPressInfo] = useState([]);
  const listener = useMemo(() => {
    return new window.keypress.Listener();
  }, []);

  const contextValue = useMemo(() => {
    return { keypressInfo, setKeyPressInfo, listener };
  }, [keypressInfo, setKeyPressInfo, listener]);

  return (
    <KeyboardContext.Provider value={contextValue}>
      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </KeyboardContext.Provider>
  );
}

export default ReactKeypress;
