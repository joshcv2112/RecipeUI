import React, { Component } from 'react';
import RecipePreview from './RecipePreview';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            ingredients: '',
            directions: '',
            imageURL: '',
            source: '',
            rating: '',
            prepTime: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <div style={{ display: 'block', justifyContent: 'space-between' }}>
                    <div style={{
                        float: 'left',
                        padding: '10px',
                        width: '30%',
                        background: '#f0f0f0',
                        marginLeft: 'auto',
                    }}>
                        <h4>Enter your recipe below</h4>
                        <form>
                            <div>
                                <label>
                                    Recipe Title:
                                    <input type="text" name="title" value={this.state.recipeTitle} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Prep Time:
                                    <input type="text" name="prepTime" value={this.state.prepTime} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Rating:
                                    <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Image URL:
                                    <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Description:
                                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Source:
                                    <input type="text" name="source" value={this.state.source} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Ingredients:
                                    <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Direcitons:
                                    <input type="text" name="directions" value={this.state.directions} onChange={this.handleChange.bind(this)} />
                                </label>
                            </div>
                        </form>
                    </div>
                    <RecipePreview title={this.state.title} description={this.state.description} ingredients={this.state.ingredients} directions={this.state.directions} imageURL={this.state.imageURL} source={this.state.source} rating={this.state.rating} prepTime={this.state.prepTime} />
                </div>
            </div>
        );
    }
}

export default CreateRecipe;
