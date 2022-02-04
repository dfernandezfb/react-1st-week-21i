import {useState} from 'react'

const Counter = () =>{
  const [count, setCount] = useState(0);
  const handleCount = (operation) =>{
    switch(operation){
      case '-':
        setCount(count-1);
        break;
      case '+':
        setCount(count+1);
        break;
      case 'reset':
        setCount(0)
        break;
    }
  }
  return(
    <>
      <p>{count}</p>
      <button onClick={()=>handleCount('-')}>-1</button>
      <button onClick={()=>handleCount('reset')}>Reset</button>
      <button onClick={()=>handleCount('+')}>+1</button>
    </>
  )
}


























// class Counter extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count:0
//     };
//   }
//   handleCount(operation){
//     switch(operation){
//       case '-':
//         this.setState({count:this.state.count-1});
//         break;
//       case '+':
//         this.setState({count:this.state.count+1});
//         break;
//       case 'reset':
//         this.setState({count:0});
//         break;
//     }
//   }
//   render(){
//     return (
//           <>
//             <p>{this.state.count}</p>
//             <button onClick={()=>this.handleCount('-')}>-1</button>
//             <button onClick={()=>this.handleCount('reset')}>reset</button>
//             <button onClick={()=>this.handleCount('+')}>+1</button>
//           </>
//         );
//   }
// }


export default Counter;