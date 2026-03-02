import React from "react";
import { useKeyBoardContext } from "./Provider.js";

function HelperContainer() {
  const { keypressInfo } = useKeyBoardContext();
  return (
    <div>
      {keypressInfo.map((item) => (
        <div>{item.text}</div>
      ))}
    </div>
  );
}

export default HelperContainer;
