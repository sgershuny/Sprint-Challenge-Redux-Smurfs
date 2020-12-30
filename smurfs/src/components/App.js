import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs,addSmurf,updateSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: '',
        id: '',
      },
      addingSmurf: true,
      smurfHeight: {
        id: '',
        height: '',
      }
    }
  }
  componentDidMount(){
    this.props.getSmurfs();
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value,
        id: this.props.smurfs.length
      }
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.smurf.name !== '' && this.state.smurf.age !== '' && this.state.smurf.height !== '' ){
      this.props.addSmurf(this.state.smurf)
    }

  }

  handleHeight = e => {
    e.preventDefault();
    this.setState({
      smurfHeight: {
        ...this.state.smurfHeight,
        id: e.target.name,
        height: e.target.value
      }
    })
  }

  updateSmurf = e => {
    e.preventDefault()
    console.log("SMURF CHANGE: ",this.state.smurfHeight)
    this.props.updateSmurf(this.state.smurfHeight)
  }

  render() {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.smurfs.map(smurf => {
          return (
            <div key = {smurf.id}>
              <h1>Name: {smurf.name}</h1>
              <h3>Age: {smurf.age}</h3>
              <h3>Height: {smurf.height}</h3>
              <input name = {smurf.id} placeholder = 'Change Height' onChange = {this.handleHeight}/>
              <button name = {smurf.id} onClick ={ this.updateSmurf }>Change Height</button>
            </div>
          )
        })}

        <form onSubmit = {this.handleSubmit}>
          <input type ='text' name = 'name' placeholder='Smurf Name...' onChange = {this.handleChange}/>
          <input type ='text' name = 'age' placeholder='Smurf Age...' onChange = {this.handleChange}/>
          <input type ='text' name = 'height' placeholder = 'Smurf Height...' onChange = {this.handleChange}/>
          <input type ='submit' onClick = {this.handleSubmit}/>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    addingSmurfs: state.addingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps,{ getSmurfs,addSmurf,updateSmurf })(App);
