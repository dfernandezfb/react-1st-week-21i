import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Counter from './components/Counter/Counter';

// class App extends React.Component{
//   constructor(){
//     super()
//   }

//   render(){
//     return(
//       <p>Hola Mundo</p>
//     )
//   }
// }





function App() {
  return (
    <>
      <Header title='Hola comisión' numero={21} activa={true}/>
      <Main/>
      <Counter/>
      <Footer/>
    </>
  );
}

export default App;
