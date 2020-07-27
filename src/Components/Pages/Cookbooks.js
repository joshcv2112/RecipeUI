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

  // TODO: Fix CORS error. Right now I'm using an extension in Chrome to make the error go away, but it will br a problem on other's machines.

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
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[0]} />
              </Grid>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[1]} />
              </Grid>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[2]} />
              </Grid>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[3]} />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[4]} />
              </Grid>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[5]} />
              </Grid>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[6]} />
              </Grid>
              <Grid item xs={3}>
                <RecipeReviewCard recipe={this.state.recipe[7]} />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return <div className={classes.root}></div>;
// }
