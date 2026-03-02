import React, { useState, useEffect, useMemo } from "react";
import KeyPressItem from "./KeyPressItem";
import { useKeyBoardContext, color } from "./Provider.js";

function D() {
  const [currentColor, setCurrentColor] = useState(0);
  const { setKeyPressInfo } = useKeyBoardContext();

  useEffect(() => {
    let item = { type: "D", text: "Click D or press sht s" };
    setKeyPressInfo((prev) => [...prev, item]);

    return () => {
      setKeyPressInfo((prev) => prev.filter((it) => it != item));
    };
  }, []);

  const shortCut = useMemo(
    () => [
      {
        key: "ctrl s",
        action: () => {
          setCurrentColor((prev) => Number(!prev));
        },
      },
    ],
    [],
  );
  return (
    <div
      style={{
        backgroundColor: `${color[currentColor]}`,
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => setCurrentColor((prev) => Number(!prev))}
    >
      <KeyPressItem type="D" shortCut={shortCut}>
        <div>D</div>
      </KeyPressItem>
    </div>
  );
}

export default D;
