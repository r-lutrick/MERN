import React/*, { Component }*/ from "react";
// import { render } from "@testing-library/react";

// Class Component
// class First extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const { firstName, lastName, age, hairColor } = this.props
//         return (
//             <div>
//                 <h1>{lastName}, {firstName}</h1>
//                 <p>Age: {age}</p>
//                 <p>Hair Color: {hairColor}</p>
//             </div >
//         )
//     }
// }

// Functional Component
const First = (props) => { // (props) can also be written without the "()"
    // No constructor needed
    // No render() function needed
    const { firstName, lastName, age, hairColor } = this.props
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default First