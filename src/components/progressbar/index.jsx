import React, { Component } from 'react';
import {connect} from 'react-redux';

class ProgressBar extends Component {
    render() {
        return (
            <div className="progress-bar">
                <div className="item completed"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        );
    }
}

export default (ProgressBar);
