import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RecipeReviewCard from './RecipeReviewCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default class Cookbooks extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    // Using proxy (see package.json) for API calls to RecipeAPI.
    // This will work as long as I'm only using one API domain.
    const url = '/api/recipes/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipe: data, loading: false });
  }

  render() {
    return (
      <div>
        <h1>Your Recipes</h1>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <Grid container spacing={2} justify={'center'}>
              {this.state.recipe.map((name) => (
                <Grid item xs={12} sm={6} md={4}>
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
