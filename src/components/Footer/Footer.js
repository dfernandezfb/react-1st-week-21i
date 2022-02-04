import './Footer.css'
import {useState} from 'react'
// import React from 'react'

// class Footer extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       date:'3 de Febrero',
        // year:2022
//     }
//   }
//   handleDate(){
//     this.setState({
//       date:'4 de febrero'
//     })
//   }

//   render(){
//     return(
//       <>
//       <p>Hoy es {this.state.date}</p>
          // <p>{this.state.year}</p>
//       <button onClick={()=>this.handleDate()}>Cambiar la fecha</button>
//       </>
//     )
//   }
// }








const Footer = () => {
  const [date, setDate] =         useState('3 de febrero')
//!    estado, funcion p/ setear estado      estado inicial
  const [year, setYear] = useState(2022)
  const handleDate= () =>{
    setDate('4 de febrero')
    setYear(year+1)
  }
  return(
    <>
      <p>Hoy es {date} del {year}</p>
      <button onClick={()=>handleDate()}>Cambiar la fecha</button>
    </>
  )
}

export default Footer