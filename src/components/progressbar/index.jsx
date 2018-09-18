import React, { Component } from 'react';
import {connect} from 'react-redux';

class ProgressBar extends Component {
    renderBars = () => {
        let bars = [];

        for ( let i = 0; i < this.props.number; i++ ) {
            let classBars = 'item';

            if ( i == this.props.completed ) {
                classBars = 'item completed';
            }

            bars.push( <div className={classBars} key={`key-${i}`}></div> );
        }

        return bars;
    }
    render() {
        return (
            <div className="progress-bar">
                { this.renderBars() }
            </div>
        );
    }
}

export default (ProgressBar);
