import React, { Component } from 'react';

export default class Cookbooks extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = 'https://localhost:5001/api/recipes/';
    //const url = 'https://api.randomuser.me/';
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
