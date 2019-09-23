import React,{Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Likes/>
      </div>
    );
  }
}


class Likes extends Component {

    constructor(props){
        super(props)
        this.state = {count:0};
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }));

    }

  render() {
    return <button className="button" onClick={this.handleClick}>{this.state.count} {this.state.count === 1 ? "like":"likes"}</button>;
  }
}

export default App;
