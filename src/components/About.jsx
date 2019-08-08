import React, { Component } from "react";
import Contact from "./Contact";

class About extends Component {
    render() {
        return (
            <div className="about-component">
                <div className="container">
                    <h3 className="mt-4 mb-4 bg-primary text-white p-3 text-center">
                        Our Team Members: <i className="fa fa-users" />
                    </h3>

                    <div className="row">
                        {this.props.members.map(member => (
                            <div className="col-md-6">
                                <div className="card card-body p-4">
                                    <h4 className="text-info">{member.name}</h4>
                                    <hr />
                                    <h6 className="text-muted">
                                        Contact Informations:
                                    </h6>
                                    <Contact data={member} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
