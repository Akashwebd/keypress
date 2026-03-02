import React, { useState, useEffect, useMemo } from "react";
import KeyPressItem from "./KeyPressItem";
import { useKeyBoardContext, color } from "./Provider.js";

function A() {
  const [currentColor, setCurrentColor] = useState(0);
  const { setKeyPressInfo } = useKeyBoardContext();

  useEffect(() => {
    let item = { type: "A", text: "Click A or press sht s" };
    setKeyPressInfo((prev) => [...prev, item]);

    return () => {
      setKeyPressInfo((prev) => prev.filter((it) => it != item));
    };
  }, []);

  const shortCut = useMemo(
    () => [
      {
        key: "shift s",
        action: () => {
          setCurrentColor((prev) => Number(!prev));
        },
      },
    ],
    [],
  );

  console.log(currentColor);
  return (
    <div
      style={{
        backgroundColor: `${color[currentColor]}`,
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => setCurrentColor((prev) => Number(!prev))}
    >
      <KeyPressItem type="A" shortCut={shortCut}>
        <div>A</div>
      </KeyPressItem>
    </div>
  );
}

export default A;
