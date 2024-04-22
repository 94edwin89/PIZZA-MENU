import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <Pizza/>
            <Pizza />
            <Pizza/>
        </div>
    )
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
            <h2>Pizza Spinaci</h2>
            <p>tomato, mozarella, spinach and ricotta cheese</p>
        </div>
    )
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
      <App />
  </StrictMode>
);

// React Before 18
// ReactDOM.render(<App/>,document.getElementById("root"));

