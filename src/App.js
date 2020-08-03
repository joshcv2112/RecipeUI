import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Category from './Components/Category';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-light'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
            <li>
              <Link to='/category'>Category</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/recipes' component={Recipes} />
        </Switch>
      </div>
    );
  }
}

export default App;
