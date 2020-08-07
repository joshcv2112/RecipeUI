import React, { Component } from 'react';
import RecipePreview from './RecipePreview';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '' };
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
                        <form>
                            <div>
                                <label>
                                    Recipe Name:
                                    <input type="text" name="title" value={this.state.recipeTitle} onChange={this.handleChange.bind(this)} />
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
                                    Ingredients:
                                    <input type="text" value={this.state.ingredients} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Direcitons:
                                    <input type="text" value={this.state.directions} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Image URL:
                                    <input type="text" value={this.state.imageURL} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Source:
                                    <input type="text" value={this.state.source} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Rating:
                                    <input type="text" value={this.state.rating} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Prep Time:
                                    <input type="text" value={this.state.prepTime} />
                                </label>
                            </div>
                        </form>
                    </div>
                    <RecipePreview title={this.state.title} description={this.state.description} />
                </div>
            </div>
        );
    }
}

export default CreateRecipe;
