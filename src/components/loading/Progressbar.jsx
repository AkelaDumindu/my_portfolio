import React, { useEffect, useState } from "react";
import "./loading.css";


const Progressbar = ({ value = 0 }) => {
    const [progress, setProgress] = useState(value);

    useEffect(() => {
      if (progress < 100) {
        const timer = setTimeout(() => setProgress((val) => val + 1), 40);
        return () => clearTimeout(timer);
      }
    }, [progress]);
  
    return (
      <div className="container loding-outer">
        <div className="logo-block3">
          <div className="LogoText">
            <div className="text-logo loading">Akela Dumindu</div>
          </div>
        </div>
  
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
  
        <p className="progress-text">{progress}%</p>
      </div>
    );
}

export default Progressbar