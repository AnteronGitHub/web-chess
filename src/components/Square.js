
import React, { Component } from 'react';
import '../styles/square.css';

export default class Square extends Component {
    render() {
        return (
            <div className="square">
                {this.props.file}{this.props.rank}
            </div>
        );
    }
}
