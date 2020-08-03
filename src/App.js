import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
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
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/category'>Category</Link>
            </li>
            <li>
              <Link to='/admin'>Admin area</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {/* <Route path='/login' component={Login} /> */}
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
          {/* <PrivateRoute path='/admin' component={Admin} /> */}
          <Route path='/products' component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
