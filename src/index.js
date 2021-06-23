import React from 'react';
import ReactDOM from 'react-dom';


// //01.Introducing JSX

// const element = <h1>Hello Bangladesh</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

/////////////////////////////////////////////////


// //02. Embedding expression in JSX
// const name = "Arfat Rahman";
// const element = <h1>Hello {name}</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )


////////////////////////////////////////////////


// //03.Another Embedding expression in JSX
// function concatName(user){
//     return user.fName+' '+user.lName;
// }

// const user = {
//     fName: "Arafat",
//     lName: "Rahman"
// }

// const element = <h1>Hello {concatName(user)}</h1>;


// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )


////////////////////////////////////////////////////



// 04. JSX itself an expression

function concatName(user){
    return user.fName+' '+user.lName;
}
function check(user)
{
    if(user)
    return <h1> Hello {concatName(user)}</h1>;
    else
    return <h1>Hello Stanger</h1>
}

const user = {
    fName: "Arafatt",
    lName: "Rahman"
}

const element = check(user);


ReactDOM.render(
    element,
    document.getElementById('root')
)