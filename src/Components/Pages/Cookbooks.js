import React, { Component } from 'react';

export default class Cookbooks extends Component {
  state = {
    loading: true,
  };

  // TODO: Fix CORS error. Right now I'm using an extension in Chrome to make the error go away, but it will br a problem on other's machines.

  async componentDidMount() {
    // Using proxy (see package.json) for API calls to RecipeAPI.
    // This will work as long as I'm only using one API domain.
    const url = '/api/recipes/';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ recipe: data[15], loading: false });
  }

  render() {
    return (
      <div>
        <h2>Your Recipes</h2>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          // Make this show cards for each recipe instead of a single one.
          <div>
            <div>Title: {this.state.recipe.title}</div>
            <div>Instructions: {this.state.recipe.description}</div>
            <div>Ingredients: {this.state.recipe.ingredients}</div>
            <div>Instructions: {this.state.recipe.instructions}</div>
            <div>Rating: {this.state.recipe.rating}</div>
            <div>Prep Time: {this.state.recipe.prepTime}</div>
            <div>Source: {this.state.recipe.source}</div>
          </div>
        )}
      </div>
    );
  }
}
