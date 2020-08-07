import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateRecipe extends Component {
    render() {
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
                    <div>
                        {this.props.title == '' ? (
                            <p></p>
                        ) : (
                                <h3>{this.props.title} </h3>
                            )}
                        {this.props.prepTime == '' ? (
                            <p></p>
                        ) : (
                                <p>{this.props.prepTime}</p>
                            )}
                        {this.props.rating == '' ? (
                            <p></p>
                        ) : (
                                <p>{this.props.rating} stars</p>
                            )}
                        {this.props.imageURL == '' ? (
                            <p></p>
                        ) : (
                                <img src={this.props.imageURL} style={{ minWidth: 799, maxWidth: 800 }}></img>
                            )}
                        {this.props.description == '' ? (
                            <p></p>
                        ) : (
                                <p>{this.props.description}</p>
                            )}
                        {this.props.source == '' ? (
                            <p></p>
                        ) : (
                                <a href={this.props.source}>{this.props.source}</a>
                            )}
                        {this.props.ingredients == '' ? (
                            <p></p>
                        ) : (
                                <div>
                                    <hr />
                                    <p>{this.props.ingredients}</p>
                                </div>
                            )}
                        {this.props.directions == '' ? (
                            <p></p>
                        ) : (
                                <div>
                                    <hr />
                                    <p>{this.props.directions}</p>
                                </div>
                            )}
                    </div >
                </div>
            </div>
        );
    }
}

export default CreateRecipe;
