import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const hocRequireAurh = (ChildComponent) => {
   class RequireAuth extends Component{
       render(){
          switch(this.props.auth){
              case false:
                  //not log
                  return <Redirect to='/'/>
              case null:
                  //not still check the authentication status
                  return <div>Loading...</div>
              default:  
              return <ChildComponent {...this.props}/>  
          }
       }
   }
   const mapStateToProps=({auth})=>{
    return {auth}
   }
  return connect(mapStateToProps)(RequireAuth)
}

export default hocRequireAurh

