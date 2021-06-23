import React from 'react';
import ReactDOM from 'react-dom';


// //01.Introducing JSX

// const element = <h1>Hello Bangladesh</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )




// //02. Embedding expression in JSX
// const name = "Arfat Rahman";
// const element = <h1>Hello {name}</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )


//03.Another Embedding expression in JSX
function concatName(user){
    return user.fName+' '+user.lName;
}

const user = {
    fName: "Arafat",
    lName: "Rahman"
}

const element = <h1>Hello {concatName(user)}</h1>;


ReactDOM.render(
    element,
    document.getElementById('root')
)



