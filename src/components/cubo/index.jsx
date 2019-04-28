import React, { Component } from 'react';
import {connect} from 'react-redux';

class CuboTesseract extends Component {

    render() {


        return (
            <div className="cubo-wrapper">



        		<div className="container">
                    <figure className="cube back-role bottom right red">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube back-role bottom left red">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube back-role top left red">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube back-role top right red">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube first-role blue bottom left">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube first-role blue bottom right">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube first-role blue top left">
        				<div className="side front"></div>
        				<div className="side left"></div>
        				<div className="side right"></div>
        				<div className="side top"></div>
        				<div className="side bottom"></div>
        				<div className="side back"></div>
        			</figure>
                    <figure className="cube first-role blue top right">
        				<div className="side front"></div>
        				<div className="side left"></div>
        				<div className="side right"></div>
        				<div className="side top"></div>
        				<div className="side bottom"></div>
        				<div className="side back"></div>
        			</figure>
                    {/*
                    */}
        		</div>

        	</div>

        );
    }
}

export default (CuboTesseract);
