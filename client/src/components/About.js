import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './About.css'

function About() {
  
      return (
      

        <div>
    <div className="d-flex flex-column">
          <div id="page-content">
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
            <div className="container text-center">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <p>I'm Josh Joyce an actor, artist and developer. <br />
                    I'm currently enrolled at Rutger's Coding Bootcamp, studying Fullstack webdev. <br />
                    With intentions of pursuing UXE after graduation.</p>
                  <p>I like pizza a lot. Ill eat it cold honestly.<br />
                    Is that weird?</p>
                  <p>While I may be versitile in fullstack dev, I specialize in front end dev.
                    <br />
                    Prefer the more artsy side of things... if you couldn't tell.
                  </p>
                  <p>I'm available for hire so hit me up!!!</p>
                  <img id="picofme" src="glassss.PNG" className="img-thumbnail fit-image" alt="Responsive image" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <footer id="sticky-footer" className="py-4 text-white-50">
            <div className="container text-center">
              <div className="d-flex justify-content-between">
                <a href="https://twitter.com/iturboijosh" className="btn btn-tw d-flex justify-content-center"><i className="fab fa-twitter fa-code" />
                </a><a href="https://www.linkedin.com/in/josh-joyce-4536811a3/" className="btn btn-ins d-flex justify-content-center"><i className="fab fa-linkedin-in fa-code" /></a>
                <a href="https://www.instagram.com/dopeassfreshprince/" className="btn btn-ins d-flex justify-content-center"><i className="fab fa-instagram fa-code" />
                </a><a href="https://github.com/kidpk" className="btn btn-git d-flex justify-content-center"><i className="fab fa-github fa-code" />
                </a></div><a href="https://github.com/kidpk" className="btn btn-git d-flex justify-content-center">
              </a></div><a href="https://github.com/kidpk" className="btn btn-git d-flex justify-content-center">
            </a></footer><a href="https://github.com/kidpk" className="btn btn-git d-flex justify-content-center">
          </a></div>
          </div>
          

      )
    
  };

export default About;
