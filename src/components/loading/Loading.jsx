import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "./Progressbar";

function Loading() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((val) => {
        if (val >= 100) {
          clearInterval(interval);
          navigate("/homePage"); 
          return val;
        }
        return val + 1; 
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="progress-wrapper">
      <Progressbar value={progress} />
    </div>
  );
}

export default Loading;
