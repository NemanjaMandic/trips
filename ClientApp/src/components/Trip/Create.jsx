import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        description: '',
        dateStarted: '',
        dateCompleted: ''
     };
     this.input = React.createRef();

  }

  componentDidMount(){

  }
  handleChange = (e) => {

    const nam = e.target.name;
    const value =  e.target.value;
   

    this.setState({
        [nam]: value
    })

  }
  
  submitForm = (e) => {
      e.preventDefault();
      const { history } = this.props;
      const tripObject = {
          Id: Math.floor(Math.random() * 1000),
          Name: this.state.name,
          Description: this.state.description,
          DateStarted: this.state.dateStarted,
          DateCompleted: this.state.dateCompleted
      }

   console.log(tripObject);

   axios.post("api/Trips/AddTrip", tripObject).then(result => {
    history.push("/trips");
   })
  }

  render() {
     
    return (
        <div className="trip-form" >
        <h3>Add new trip</h3>
        <form onSubmit={this.submitForm}>
            <div className="form-group">
                <label>Trip name:  </label>
                <input 
                 name="name"
                  type="text" 
                  className="form-control" 
                  value={this.state.name}
                  onChange={this.handleChange}
                 />
                          

            </div>
            <div className="form-group">
                <label>Trip description: </label>
                <textarea 
                  name="description"
                  type="text" 
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
            </div>
            <div className="row">
                <div className="col col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <label>Date of start:  </label>
                        <input 
                          name="dateStarted"
                          type="date" 
                          ref={this.input}
                          className="form-control" 
                          value={this.state.dateStarted}
                          onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="col col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Date of completion:  </label>
                    <input 
                        name="dateCompleted"
                        type="date" 
                        className="form-control" 
                        value={this.state.dateCompleted}
                        onChange={this.handleChange}
                    />
                    </div>
                </div>
            </div>
            
            
            <div className="form-group">
                <input type="submit" value="Add trip" className="btn btn-primary"/>
            </div>
        </form>
    </div>
    );
  }
}
