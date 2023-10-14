// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
//   map.persons((item,index){
//     <h1>item.persons</h1>
//   }
import React, { Component, useState } from "react";



function App(){
    const list=[]

    const item=list.map((name)=>
       <li>
        {name}</li>
    )
  
  return(
    <>
  
    <ul>{item}</ul>
    </>

  )
}
export default App
