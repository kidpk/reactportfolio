import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";


import './Apps.css';

export default function SearchResultContainer() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark" id="navbar">
  
  <a className="navbar-brand text-light" href="/">Joshua Joyce</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="/About">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/Projects">Projects</a>
      </li>
    </ul>
  </div>
</nav>


    </div>
  )
}
















