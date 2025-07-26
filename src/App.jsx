import React from "react";
export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  function toggleGoingOut() {
    setIsGoingOut((prev) => !prev);
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={toggleGoingOut}
        aria-label={`Current Answer is ${
          isGoingOut ? "Yes" : "No"
        }. click to chabge it`}
        className="value"
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
