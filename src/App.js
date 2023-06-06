import React, { Component } from "react"; // import react
import Profile from "./Profile"; // import proile
import "./App.css"; // Import the App.css file
// the component 
class App extends Component {
  render() {
    return (
      <div className="app-container">
        
        <Profile />
      </div>
    );
  }
}

export default App;
