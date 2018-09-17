import React, { Component } from 'react';
import {connect} from 'react-redux';

class CuboTesseract extends Component {

    render() {


        return (
            <div className="cubo-wrapper">



        		<div className="container">
                    <figure className="cube back-role bottom right">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube back-role bottom left">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube back-role top left ">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube back-role top right">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube first-role bottom left">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube first-role bottom right">
                        <div className="side front"></div>
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                        <div className="side back"></div>
                    </figure>
                    <figure className="cube first-role top left">
        				<div className="side front"></div>
        				<div className="side left"></div>
        				<div className="side right"></div>
        				<div className="side top"></div>
        				<div className="side bottom"></div>
        				<div className="side back"></div>
        			</figure>
                    <figure className="cube first-role top right">
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
