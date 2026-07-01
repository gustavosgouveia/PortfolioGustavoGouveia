import { useEffect, useRef, useState } from "react";

export function useCursorGlow(enabled = true) {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });
  const frameRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0, visible: false });

  useEffect(() => {
    if (!enabled || window.matchMedia("(pointer: coarse)").matches) {
      setPosition({ x: 0, y: 0, visible: false });
      return undefined;
    }

    const handleMove = (event) => {
      lastPositionRef.current = { x: event.clientX, y: event.clientY, visible: true };

      if (frameRef.current) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0;
        setPosition(lastPositionRef.current);
      });
    };

    const handleLeave = () => {
      lastPositionRef.current = { ...lastPositionRef.current, visible: false };
      setPosition((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled]);

  return position;
}