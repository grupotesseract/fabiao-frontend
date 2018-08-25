import React, { Component } from 'react';
import {connect} from 'react-redux';

class CuboTesseract extends Component {

    render() {


        return (
            <div className="cubo-wrapper">



        		<div class="container">
        			<figure class="cube">
        				<div class="front"></div>
        				<div class="left"></div>
        				<div class="right"></div>
        				<div class="top"></div>
        				<div class="bottom"></div>
        				<div class="back"></div>
        			</figure>
        		</div>

        	</div>

        );
    }
}

export default (CuboTesseract);
