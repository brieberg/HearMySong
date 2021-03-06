import React, { Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import About from './Components/About.js';
import Help from './Components/Help.js';
import Listen from './Components/Listen.js';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {

    componentDidMount(){
    $(".sidebar").hide();
    $(".column-c").css("width" , "100%");

     $("#listen").click(function(){
        $(".sidebar").show();
        $(".column-c").css("width" , "80%");
    });
    $("#home").click(function(){
        $(".sidebar").hide();
        $(".column-c").css("width" , "100%");
    });
    $("#help").click(function(){
        $(".sidebar").hide();
        $(".column-c").css("width" , "100%");
    });
    $("#about").click(function(){
        $(".sidebar").hide();
        $(".column-c").css("width" , "100%");
    });
    }

    render() {
        return (
                <div class="App">          
                <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'/>
                <div class="header">
                <div class="topnav">
                <a href="#" id="home"><img src={require('./images/hms-ongrey-w.png')} width="250x" height="75px"/></a>    
                <ul>   
                <Link to="/" >Listen</Link>
                <Link to="/help">Help</Link>
                <Link to="/about">About</Link>
                </ul>
                </div>
                </div>
                <div class="row">
                <div class="column-s">
                    <div class = "sidebar">
                        <p>Sidebar</p>
                    </div>
                </div>
                <div class="column-c">
                <div class = "content">
                    <Switch>
                    <Route exact path="/" component={Listen}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/about" component={About}/>
                    </Switch>
                </div>
                </div>
                </div>   
                </div>      
           
        );
    }


}

export default App;