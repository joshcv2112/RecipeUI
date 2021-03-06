import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';
import Button from 'react-bootstrap/Button';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { recipeData: null, loading: true };
  }

  async componentDidMount() {
    const url = '/api/recipes/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipeData: data, loading: false });
  }

  render() {
    return (
      <div>
        <h2>Your Cookbook</h2>
        <Link to={'/create/recipe'}>
          <Button variant="primary">Create Recipe</Button>
        </Link>
        {this.state.loading ? (
          <div>loading . . .</div>
        ) : (
            <div>
              <div>
                <div
                  style={{ display: 'block', justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      float: 'left',
                      padding: '10px',
                      width: '30%',
                      background: '#f0f0f0',
                      marginLeft: 'auto',
                    }}
                  >
                    <h3>Recipes</h3>
                    <ul
                      style={{
                        listStyleType: 'none',
                        padding: 0,
                        fontSize: '15px',
                      }}
                    >
                      {' '}
                      {this.state.recipeData.map((value, index) => {
                        return (
                          <li key={index}>
                            <Link to={`${this.props.match.url}/${index}`}>
                              {value.title}
                            </Link>
                          </li>
                        );
                      })}{' '}
                    </ul>
                  </div>
                </div>

                <Route
                  path={`${this.props.match.url}/:productId`}
                  render={(props) => (
                    <Product data={this.state.recipeData} {...props} />
                  )}
                />
                <Route
                  exact
                  path={this.props.match.url}
                  render={() => (
                    <div style={{ textAlign: 'center' }}>
                      Please select a product.
                    </div>
                  )}
                />
              </div>
            </div>
          )}
      </div>
    );
  }
}
