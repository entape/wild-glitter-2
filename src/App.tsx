import { useState } from "react";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`App ${!isDarkTheme ? "light" : "dark"}`}>
      <button onClick={() => setIsDarkTheme((theme) => !theme)}>
        Switch to {isDarkTheme ? "light" : "dark"}
      </button>
    </div>
  );
}

export default App;
