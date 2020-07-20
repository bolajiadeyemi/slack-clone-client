import React, { Component} from "react";
import { Login } from "./components/login";
import './App.css'

class  App extends Component {
  state = {
    isAuth: false,
    username: ''
  }

  handleAuth = (payload) => {
    const { isAuth, username } = payload;
    this.setState({
      isAuth,
      username
    })
  }

  render(){
   const { isAuth, username } = this.state;

   if(isAuth){
   return <div>
     <h1>Welcome, {username}</h1>
   </div>
   }

  
    return (
      <div className="app">
        <Login onAuth={this.handleAuth} />
      </div>
    );
  }

}

export default App;
