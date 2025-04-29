import { useState, useEffect } from "react";

function App() {
  // Get the last color from localStorage (if exists) or use default color
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "black";
  });

  // Update localStorage whenever color changes
  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white rounded-3xl px-2 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none rounded-full px-2 py-2 text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none rounded-full px-2 py-2 text-white shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none rounded-full px-2 py-2 text-white shadow-lg"
            style={{ background: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
