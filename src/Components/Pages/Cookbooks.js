import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './RecipeReviewCard';

export default class Cookbooks extends Component {
  state = {
    loading: true,
  };

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  async componentDidMount() {
    // Using proxy (see package.json) for API calls to RecipeAPI.
    // This will work as long as I'm only using one API domain.
    const url = '/api/recipes/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipe: this.shuffle(data), loading: false });
  }

  render() {
    return (
      <div>
        <h1>Your Recipes</h1>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <Grid container spacing={2}>
              {this.state.recipe.map((name, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <RecipeReviewCard recipe={name} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}
