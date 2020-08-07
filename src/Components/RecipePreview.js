import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateRecipe extends Component {
    render() {
        if (this.props.title == null) {
            return (
                // Look at flex box or some other layout thing so I can position these two things the way I want to.
                <div>
                    <h5>Recipe Preview</h5>
                </div>
            );
        } else {
            return (
                <div>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                    <h5>{this.props.title}</h5>
                </div>

            );
        }

    }
}

export default CreateRecipe;
