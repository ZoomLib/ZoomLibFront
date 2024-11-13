import React from "react";
import ImageZoom from "./components/ImageZoom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <ImageZoom src="/logo512.png" />
    </div>
  );
};

export default App;
