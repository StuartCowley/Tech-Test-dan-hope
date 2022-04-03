import React, { useState } from "react";
import "../styles/App.css";
import Search from "./search";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState("");
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="logo"
      />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
