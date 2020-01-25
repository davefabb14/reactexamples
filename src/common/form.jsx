import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: {},
          errors:{}
        };
      }

      handleSubmit=(e)=>{
        e.preventDefault()
        const errors=this.validate();
        this.setState({errors});
        console.log(errors)
           this.doSubmit();
        console.log("fsdfdgdfg")
        
        }

    
    
}
export default Form
