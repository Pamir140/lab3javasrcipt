import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";

import pamirImage from "./images/pamir.jpg";
import limonImage from "./images/limon.jpg";

class App extends Component {
    state = {
        members: []
    };
    componentDidMount() {
        const members = [
            {
                name: "Pamir biswas",
                age: 26,
                about: "Studying & Programmming",
                study: "Jahangir Nagar University",
                image: pamirImage,
                address: "Gopalgonj, Bangladesh"
            },
            {
                name: "Shifat Mahmud Limon",
                age: 22,
                about: "Studying & Programmming",
                study: "Dhaka College",
                image: limonImage,
                address: "Dhaka, Bangladesh"
            }
        ];

        this.setState({ members });
    }
    render() {
        return (
            <div>
                <Navbar />
                <About members={this.state.members} />
            </div>
        );
    }
}

export default App;
