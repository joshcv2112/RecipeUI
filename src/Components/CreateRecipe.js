import React, { Component } from 'react';
import RecipePreview from './RecipePreview';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { recipeTitle: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ recipeTitle: event.target.value });
    }

    // Using this https://reactjs.org/docs/forms.html to help build forms. no fancy libraries yet.
    render() {
        return (
            <div>
                <div style={{ display: 'inline-block', border: 'solid 1px red', width: 300, height: "100vh" }}>
                    <form>
                        <label>
                            Recipe Name:
                            <input type="text" value={this.state.recipeTitle} onChange={this.handleChange} />
                        </label>
                        <label>
                            Description:
                            <input type="text" value={this.state.recipeTitle} onChange={this.handleChange} />
                        </label>
                        <label>
                            Ingredients:
                            <textarea></textarea>
                        </label>
                        <label>
                            Direcitons:
                            <textarea></textarea>
                        </label>
                        <label>
                            Image URL:
                            <input type="text" value={this.state.recipeTitle} onChange={this.handleChange} />
                        </label>
                        <label>
                            Source:
                            <input type="text" value={this.state.recipeTitle} onChange={this.handleChange} />
                        </label>
                        <label>
                            Rating:
                            <input type="text" value={this.state.recipeTitle} onChange={this.handleChange} />
                        </label>
                        <label>
                            Prep Time:
                            <input type="text" value={this.state.recipeTitle} onChange={this.handleChange} />
                        </label>
                    </form>
                </div>
                <div style={{ display: 'inline-block', border: 'solid 1px blue', width: 1000 }}>
                    <RecipePreview title={this.state.recipeTitle} />
                </div>
            </div>
        );
    }
}

export default CreateRecipe;
