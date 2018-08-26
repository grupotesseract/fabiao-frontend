import React, { Component } from 'react';
import {connect} from 'react-redux';

class CuboTesseract extends Component {

    render() {


        return (
            <div className="cubo-wrapper">



        		<div class="container">
                    <figure class="cube first-role top left">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube first-role top right blue">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube first-role bottom left">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube first-role bottom right blue">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube back-role top left ">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube back-role top right red">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube back-role bottom left red">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
                    <figure class="cube back-role bottom right red">
        				<div class="side front"></div>
        				<div class="side left"></div>
        				<div class="side right"></div>
        				<div class="side top"></div>
        				<div class="side bottom"></div>
        				<div class="side back"></div>
        			</figure>
        		</div>

        	</div>

        );
    }
}

export default (CuboTesseract);
