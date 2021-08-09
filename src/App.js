import React from 'react';
import './App.css';
import './style.css'

import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from "react-transition-group";


import Users from './components/users'

import TodoList from './components/TodoList'

import Counter from './components/counter'

function App() {

  return (

      <div>


      <Router>


          <Counter/>

              {/*<Link to={'/tasks'}>*/}
                  {/*<h1>Tasks </h1>*/}
              {/*</Link>*/}


              {/*<Link to={'/'}>*/}
                  {/*<h1>Users </h1>*/}
              {/*</Link>*/}
              {/*<div>*/}
                 {/**/}
                      {/*<Switch>*/}

                          {/*<Route path="/:id"  exact>*/}
                              {/*<Users/>*/}

                          {/*</Route>*/}

                          {/*<Route path="/tasks" exact>*/}
                              {/*<TodoList/>*/}

                          {/*</Route>*/}


                          {/*<Redirect to="/"/>*/}

                      {/*</Switch>*/}


              {/*</div>*/}

      </Router>
          
      </div>

  )

}




export default App;
