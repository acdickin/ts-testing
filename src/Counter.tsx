import * as React from 'react';

interface IProps{
  counter:number
}
class Counter extends React.Component{
  public state:IState={
    count:0
  }
  public increment =()=>{
    this.setState({count:this.state.count+1});
  }
  public decrement =()=>{
    this.setState({count:this.state.count-1});
  }
  public render(){
    const {count} =this.state;
    return(
      <div className="Counter">
        <p>Current num is {count}</p>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    )
  }
}

export default Counter;
