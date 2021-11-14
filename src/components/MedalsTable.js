import React from 'react'
import { medalsData } from "../dummyData"

export const MedalsTable = (props) => {
  return (
    <div className="App">
      <HomePage />
      <div className="medals-container">
       <table>
        <tbody>
          <tr>
          <td style={{fontWeight: 'bold', backgroundColor: 'chocolate'}}>ID</td>
          <td style={{fontWeight: 'bold', backgroundColor: 'chocolate'}}>Year</td>
          <td style={{fontWeight: 'bold', backgroundColor: 'chocolate'}}>Medals</td>
          </tr>
        </tbody>
        </table>
       {medalsData.map((data, key) => {
           return(
               <div key={key}>
               <Medal 
                key={key}
               
               Id={data.Id}
               
               Year={data.Year}
               
               Medals={data.Medals}
               
               />
                </div>
           );
       })}
      </div>
    </div>
  )
}

const HomePage = () => {
    return (
        <header className="header">
         <h2>Medals Won by India in Olympics</h2>
        </header>
    )
}

const Medal = ({ Id, Year, Medals}) => {
    if(!Id) return <div />
    return (
        <table>
        
        <tbody>
        <tr>
        <td>
        <h5>{Id}</h5>
        </td>
        <td>
        <h5>{Year}</h5>
        </td>
        <td>
        <h4>{Medals}</h4>
        </td>
        </tr>
        </tbody>
        </table>
    )
}