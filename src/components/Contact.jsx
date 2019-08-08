import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="contact-component ">
                <div className="card card-body border-info text-black">
                    <p className="text-center">
                        <img
                            src={this.props.data.image}
                            alt=""
                            width="150px"
                            height="150px"
                            className="img rounded rounded-circle"
                        />
                    </p>
                    <div className="border-top p-3">
                        <div className="">
                            <div className="row">
                                <div className="col-4">
                                    <strong>Age :</strong>
                                </div>
                                <div className="col">
                                    {this.props.data.age} years
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-4">
                                    <strong>Studied :</strong>
                                </div>
                                <div className="col">
                                    {this.props.data.study}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-4">
                                    <strong>Address :</strong>
                                </div>
                                <div className="col">
                                    {this.props.data.address}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="row">
                                <div className="col-4">
                                    <strong>About :</strong>
                                </div>
                                <div className="col">
                                    {this.props.data.about}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
