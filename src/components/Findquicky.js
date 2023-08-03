import React from 'react' ; 
 
const findquicky = ({adding3}) => {

  const years = [];
  

  if (adding3) {
    years.push(adding3); 
    console.log (years)// Add the new data to the years array
  }
  return (
    <div>
        <div style={{background: 'linear-gradient(to right, #ff7f50, #ff4e50)', height : "30px"}}> 
        <h2 style={ { margin : "0px", fontSize: "20px", textAlign: "center", padding : "3px"}}> Hey these results might help you!</h2>
        </div>
        <div style={ {background : "black", height : "300px", textAlign : "center", color : "white" }}> 
        <div  style={ {padding : "10px"}}>  {adding3.year}, {adding3.decision} leap year  </div>
        </div>
    </div>
  )
}

export default findquicky