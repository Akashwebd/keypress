import React, { useState, useEffect, useMemo } from "react";
import KeyPressItem from "./KeyPressItem";
import { useKeyBoardContext, color } from "./Provider.js";

function C() {
  const [currentColor, setCurrentColor] = useState(0);
  const { setKeyPressInfo } = useKeyBoardContext();

  useEffect(() => {
    let item = { type: "C", text: "Click C or press sht s" };
    setKeyPressInfo((prev) => [...prev, item]);

    return () => {
      setKeyPressInfo((prev) => prev.filter((it) => it !== item));
    };
  }, [setKeyPressInfo]);

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
      <KeyPressItem type="curr" shortCut={shortCut}>
        <div>C</div>
      </KeyPressItem>
    </div>
  );
}

export default C;
