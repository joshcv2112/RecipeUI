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
                            <p>Placeholder</p>
                        ) : (
                                <div>
                                    <h3>{this.props.title} </h3>
                                </div>
                            )}
                        {this.props.description == '' ? (
                            <p>Placeholder</p>
                        ) : (
                                <p>{this.props.description}</p>
                            )}

                    </div >
                </div>
            </div>
        );
    }
}

export default CreateRecipe;
