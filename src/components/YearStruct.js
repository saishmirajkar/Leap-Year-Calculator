
import React, {Component} from 'react';


class YearStruct extends React.Component{
  state = {
    year  : "" ,
    decision : "No", 

  }
  add = (e) => {
    e.preventDefault(); 
    //console.log (this.state.year);
   
    if(((this.state.year % 4 === 0) && (this.state.year % 100 !== 0)) ||
    (this.state.year % 400 === 0))
    {
     
      this.setState({ decision: "IS" }, () => {
       // console.log(this.state.decision);
       // console.log(this.state);
        this.props.adding1(this.state);
      });
      return;
    }
    else {
      
      this.setState({ decision: "NO" }, () => {
       // console.log(this.state.decision);
       // console.log(this.state);
        this.props.adding1(this.state);
      });
      return;
    
    }
    
    
  }
  render(){
  return (
    <div style={{justifyContent : "CENTER",  backgroundColor: "black"}} >
     <h3 style={{fontFamily :"Lemon/Milk", padding : "20PX", justifyContent : "CENTER", textAlign :"center", backgroundColor: "black", margin : "0px"}}>ENTER THE YEAR </h3>
     <div style={ {textAlign : "center"} }>
     <input type='number' name = "year" placeholder='year' value =  {this.state.name} onChange={ (e) => this.setState( {year : e.target.value}) } style={{justifyContent : "center",textAlign :"center", background: 'linear-gradient(to right, #ff7f50, #ff4e50)', border : "0px", marginBottom : "10px"}}></input>
     
     </div>
     <div style={{textAlign : "center",fontWeight: 'bold' }}>
     <button className='button' onClick={this.add} style={ {margin : "20px", width : "150px", textAlign :  "center", padding : "5px", background : "red", border : "0px", fontFamily : "roboto", fontWeight: 'bold'} }><strong>TA-DA</strong></button>
     </div>
    </div>
  )
  }
}


export default YearStruct