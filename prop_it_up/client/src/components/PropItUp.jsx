import { render } from "@testing-library/react";
import React, { Component } from "react";

class First extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div >
        )
    }
}

export default First