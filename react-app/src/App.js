import React from 'react';

class App extends React.Component{
  // 初始狀態 react更改狀態為核心目標
  constructor(){
    super()
    this.state = {
      total:0,
    }
  }
  

  
  render(){
    return(
    // <>和</>是父元素用來把一切包起來
    <>
      <h1>{this.state.total}</h1>
      <button
        onClick = { () =>{
          this.setState({total:this.state.total+1})
        }}
        >
      +1
      </button>

      <button
      onClick = { () =>{
          this.setState({total:this.state.total-1})
        }}
        >
      -1
      </button>
    </>
  )}
}

export default App;
