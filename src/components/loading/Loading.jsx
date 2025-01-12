import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "./Progressbar";

function Loading() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const hasNavigated = useRef(false); // Ref to prevent multiple navigations

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((val) => {
        if (val >= 100) {
          clearInterval(interval);
          if (!hasNavigated.current) {
            hasNavigated.current = true; // Ensure navigation happens only once
            navigate("/homePage");
          }
          return val;
        }
        return val + 1;
      });
    }, 50);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [navigate]);

  return (
    <div className="progress-wrapper">
      <Progressbar value={progress} />
    </div>
  );
}

export default Loading;
