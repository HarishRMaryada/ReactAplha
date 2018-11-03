import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route , Link} from 'react-router-dom'


//import Component
import Layout from './Presentation/Layout'
import PageA from './Components/PageA'
import PageB from './Components/PageB'


import * as actions from './Actions'

class App extends Component {

  renderAuthBtn(){
    if(this.props.auth){
      return <button onClick = {() =>  this.props.Authentication(false)}>Sign oUt</button>
    }
    else {
      return <button onClick = {() => this.props.Authentication(true)}>Sign IN</button>
    }
  }

  renderLayout() {
    return (
      <ul>
        <li>
          <Link  to="/A" >A</Link>
        </li>
        <li>
           <Link to="/B">B</Link>
        </li>
        <li>
           {this.renderAuthBtn()}
        </li>
      </ul>
    )
  }
  render() {
    return (
      <div className="App">       
        {/* <Layout></Layout> */}

                {this.renderLayout()}

        
        <Route path ='/A' component={PageA} />
        <Route path ='/B' component={PageB} />
        <Route path ='/' exact  component={PageA} /> {/* exact match */}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}



export default connect(mapStateToProps,actions)(App);
