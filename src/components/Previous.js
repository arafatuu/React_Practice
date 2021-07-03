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



// // 04. JSX itself an expression

// function concatName(user){
//     return user.fName+' '+user.lName;
// }
// function check(user)
// {
//     if(user)
//     return <h1> Hello {concatName(user)}</h1>;
//     else
//     return <h1>Hello Stanger</h1>
// }

// const user = {
//     fName: "Arafatt",
//     lName: "Rahman"
// }

// const element = check(user);


// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )


// //05. JSX represents Objects

  //  //method 01

  //  const element1 = (
  //    <h1 className="ok">
  //        Hello Baby....! Whassuphhh.....I am from Ok
  //    </h1>
  //  );
   

//    //Method 02:

//    const element2 = React.createElement(
//        'h1',
//        {className: 'okok'},
//        'Hello babby,,, I am from okok'

//    );


//    //method 03:

//    const element3 = {
//        type: 'h1',
//        props: {
//            className: 'OKOKOK',
//            children: 'Babyyy..... I am from OKOKOK'
//        }
//    }


    //ReactDOM.render(element1,document.getElementById('root'));

// //06. Rendering Elemet
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, Bangladesh!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);


// // Component
// //01. FUNCTIONAL COMPONENT

// function Clock({locale})
// {
//   return (
//     <div>
//       <h1>Hello, Bangladesh!</h1>
//       <h2>It is {new Date().toLocaleTimeString(locale)}.</h2>
//     </div>
//   );
// }
//       ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById('root'));
    
 


// // // 02. Class Component -01


// class Clock{
//   print()
//   {
//     return (
//       <div>
//         <h1>Hello, Bangladesh!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }


// const clockObj = new Clock();
// ReactDOM.render(clockObj.print(), document.getElementById('root'));




// // // 02. Class Component -02


// class Clock extends React.Component{
//   render()
//   {
//     return (
//       <div>
//         <h1>Hello, Bangladesh!</h1>
//         <h2>It is {new Date().toLocaleTimeString(this.props.locale)}.</h2>
//       </div>
//     );
//   }
// }


// ReactDOM.render(<Clock locale = "bn-BD"/>, document.getElementById('root'));


