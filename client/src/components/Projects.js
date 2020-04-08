import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import './Projects.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class Projects extends Component {

    render () {
      return (
        <div>
          <div className="d-flex flex-column">
            <ul className="nav">
              <li className="nav-item meme">
                <a className="nav-lin active myname" href="/"><b>Josh Joyce</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About">About</a>
              </li>
            </ul>
          </div>
          <div className="container project1">
            <a className="projects" href="https://adeelshaukat1.github.io/our-night/">
              <h1>Ournight</h1>
            </a>
            <a className href="https://github.com/Adeelshaukat1/our-night">
              <p>Github</p>
            </a>
            <img id="ournight" src="shirtty.png" className="img-thumbnail fit-image" alt="Responsive image" />
          </div>
          <div className="container project2">
            <a className="projects" href="https://github.com/Adeelshaukat1/workout-app">
              <h1>Workout Planner</h1>
            </a>
            <a className href="https://github.com/Adeelshaukat1/workout-app">
              <p>Github</p>
            </a>
            <img id="workoutplanner" src="workoutplanner.png" className="img-thumbnail fit-image" alt="Responsive image" />
          </div>
          <div className="container project3">
            <a className="projects" href="https://kidpk.github.io/brickwall/">
              <h1>Weather Dashboard</h1>
            </a>
            <a className href="https://github.com/kidpk/brickwall">
              <p>Github</p>
            </a>
            <img id="weather" src="weatherdash.png" className="img-thumbnail fit-image" alt="Responsive image" />
          </div>
          <div className="container project4">
            <a className="projects" href="https://kidpk.github.io/ohio/">
              <h1>Code Quiz</h1>
            </a>
            <a className href="https://github.com/kidpk/ohio">
              <p>Github</p>
            </a>
            <img id="codequiz" src="codequiz.png" className="img-thumbnail fit-image" alt="Responsive image" />
          </div>
          <div className="container project5">
            <a className="projects" href="https://kidpk.github.io/dayplanner/">
              <h1>Day Planner</h1>
            </a>
            <a className href="https://github.com/kidpk/dayplanner">
              <p>Github</p>
            </a>
            <img id="dayplanner" src="dayplanner.png" className="img-thumbnail fit-image" alt="Responsive image" />
          </div>
        </div>
      );
    }
  };

export default Projects;
