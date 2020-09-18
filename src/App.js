import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';

function App() {
   
  const nayoks = [ 
    {name:"jashim khan", age: "20", id:"a"}, 
    {name:"Miya khan", age: "30" , id:"b"},
    {name:"Kutta khan", age: "50", id:"c" },
    {name:"Bilai khan", age: "70", id:"d"},
    {name:"hiya khan", age: "60", id:"e"},
    {name:"Mahdi hasan", age: "10", id:"f"},
    {name:"Hridoy khan", age: "90", id:"g"},
    {name:"janowar khan", age: "160", id:"h"},
    {name:"Helal khan", age: "610", id:"i"},
    {name:"mattari khan", age: "360", id:"j"},
    {name:"chagol khan", age: "560", id:"k"}
  ]
  
  const [user, setUser] = useState([])
  useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then (data => setUser(data))

  })
  


  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Nayok nayokName = {nayoks[0].name}></Nayok>
       <Nayok nayokName = {nayoks [1].name}></Nayok>
       <Nayok nayokName = {nayoks [2].name}></Nayok>
       <Nayok nayokName = {nayoks[3].name}></Nayok>
       <Nayok nayokName = {nayoks[4].name}></Nayok>
       <MovieCounter></MovieCounter>
       {
         nayoks.map(nk => <Nayokka actorsName = {nk.name} key={nk.id}  actorsAge= {nk.age}></Nayokka>)
       }
       
       {
         user.map(userName => <FetchComponent  name ={userName.name} key={userName.id}></FetchComponent>)
       }
       
      </header>
    </div>
  );
}



function FetchComponent(props) {
  
  return (
    <div style= {{
      border: "2px dotted red",
      margin: "15px",
      padding: "15px"
    }}>
    <h1>Fetch Name: {props.name}</h1>
    </div>
  )
}

function Nayokka(props) {
  
  return (
    <div style = {{
      border: "3px solid salmon",
      margin: "15px",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px 5px red"
    }}>
      <h1>He is a: {props.actorsName} </h1>
  <h4>His AGe: {props.actorsAge}</h4>
    </div>
  )
}



function MovieViews(props) {
  
  return (
    <div >
      <h4>MovieViews: {props.movie} </h4>
    </div>
  )
}

function Nayok(props) {
  
  return (
    <div style = {{
      border: "2px solid red",
      margin: "10px",
      color: "red"
    }}>
      <h1>Ami nayok: {props.nayokName}</h1>
      <h3>Manna khan is a big nayok.</h3>
      <h6>Amin khal Nayok</h6>
    </div>
  )
}

function MovieCounter(props) {
  const [count, setCount] = useState(0)
  

  return (
    <div style = {{
      width: "500px",
      height: "500px",
      border: "2px solid red",
      color: "white"
    }}>
      <h6>MovieCounter: {count} </h6>
      <button onClick = {()=> setCount(count + 1)}>Increase MovieCounter</button>
      <MovieViews movie= {count}></MovieViews>
      <MovieDisplay display = {count}></MovieDisplay>
    </div>
  )


}

function MovieDisplay(props) {
  
return <h1>Movie Display Hoyeche:  {props.display} </h1>
}
export default App;
