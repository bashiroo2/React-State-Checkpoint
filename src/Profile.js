import React, { Component } from "react";
import { Button, Card } from "react-bootstrap"; // Importing the Button and Card components from react-bootstrap library
import "./App.css"; // Importing a CSS file

export default class Profile extends Component {
  state = {
    // Profile info
    Person: {
      fullName: "jemai med bechir",
      bio: "trolling this life, coding for reason",
      imgsrc:
        "https://gomycodelearndev.blob.core.windows.net/profiles/8f9f6e61-15d5-41b2-9c5d-ff17b1e19f1e-133250112595900828.jpg",
      profession: "web Developer",
    },
    shows: false, // A boolean value to control the visibility of the profile
    timeSinceMount: 0, // The time in seconds since the component mounted
  };

  // Function to toggle the value of "shows" in the state
  toggleShows = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    // Updating the timeSinceMount value every second using setInterval
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clearing the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.intervalId);
  }

  render() {
    const { shows, timeSinceMount } = this.state;

    return (
      <div className="profile-container">
        <div className="profile-content">
          {/* Button to toggle the profile visibility */}
          <Button variant="primary" onClick={this.toggleShows} className="glowing-btn">
            <span className="glowing-txt">
              {shows ? "Hide Profile" : "Show Profile"}
            </span>
          </Button>

          {/* Rendering the profile card if shows is true */}
          {shows && (
            <Card className="profile-card">
              <Card.Img
                variant="top"
                src={this.state.Person.imgsrc}
                height="350px"
              />
              <Card.Body>
                <Card.Title>{this.state.Person.fullName}</Card.Title>
                <Card.Text>{this.state.Person.bio}</Card.Text>
                <div>Profession: {this.state.Person.profession}</div>
              </Card.Body>
            </Card>
          )}

          {/* Displaying the time since the component mounted */}
          <div className="profile-timer">
            Time since mount: {timeSinceMount} seconds
          </div>
        </div>
      </div>
    );
  }
}
