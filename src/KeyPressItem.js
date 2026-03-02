import React, { useRef, useEffect } from "react";
import { useKeyBoardContext } from "./Provider";

function KeyPressItem({ children, shortCut = [] }) {
  const { listener } = useKeyBoardContext();
  const domref = useRef(null);

  useEffect(() => {
    if (!listener || !shortCut.length) return;

    const configs = shortCut.map((item) => ({
      keys: item.key,
      on_keydown: (e) => {
        e.preventDefault();
        item.action();
      },
    }));
    listener.register_many(configs);
    return () => {
      const keysToUnregister = shortCut.map((item) => item.key);
      if (typeof listener.unregister_combo === "function") {
        listener.unregister_combo(keysToUnregister);
      }
    };
  }, [listener, shortCut]);

  return <div ref={domref}>{children}</div>;
}

export default KeyPressItem;
