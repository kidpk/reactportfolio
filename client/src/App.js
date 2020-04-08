import React from "react";
import SearchResultContainer from "./components/SearchResultContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./components/About"
import Projects from "./components/Projects"


function App() {
  return (
    <div>
       <main>
          <Switch>
          <Route path='/' component={SearchResultContainer} exact />
          <Route path='/About' component={About} />
          <Route path='/Projects' component={Projects} />
          <Route component={Error} />

          </Switch>
      </main>
    </div>
  )
}










// function App() {
//   return (
      // <main>
      //     <Switch>
      //     <Route path='/' component={SearchResultContainer} exact />
      //     <Route path='/About' component={About} />
      //     <Route path='/Projects' component={Projects} />
      //     <Route component={Error} />

      //     </Switch>
      // </main>
//   )
// }

export default App;