import React, { Component } from 'react';

class Product extends Component {
  render() {
    var recipe = this.props.data[Number(this.props.match.params.productId)];
    var recipeData;

    if (this.props.data)
      recipeData = (
        <div>
          <h3> {recipe.title} </h3>
          <p>{recipe.description}</p>
          <hr />
          <p>{recipe.instructions}</p>{' '}
        </div>
      );
    else recipeData = <h2> Sorry. Product doesnt exist </h2>;

    return (
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '0 10% 0 10%',
            width: '80%',
            margin: 'auto',
            background: '#ffffff',
          }}
        >
          {recipeData}
        </div>
      </div>
    );
  }
}

export default Product;
