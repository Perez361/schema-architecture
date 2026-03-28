"use client";
import { useEffect, useState } from "react";

export default function Spinner() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`spinner-wrap${hidden ? " hidden" : ""}`}>
      <div className="spinner-ring" />
    </div>
  );
}
