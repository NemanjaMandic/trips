import React, { Component } from 'react';
import axios from 'axios';

export class Update extends Component {
  

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
    const { id } = this.props.match.params;
    axios.get(`api/Trips/SingleTrip/${id}`).then(trip => {
      const response = trip.data;
      this.setState({
        name: response.name,
        description: response.description,
        dateStarted: new Date(response.dateStarted).toISOString(),
        dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString() : ''
      })
    })
  }
  handleChange = (e) => {

    const nam = e.target.name;
    const value =  e.target.value;
   

    this.setState({
        [nam]: value
    })

  }

  onUpdateCancel = () => {
   const { history } = this.props;
   history.push('/trips')
  }

  updateTrip = (e) => {
      e.preventDefault();
      const { history } = this.props;

      const { id } = this.props.match.params;

      const tripObject = {
          Name: this.state.name,
          Description: this.state.description,
          DateStarted: new Date(this.state.dateStarted).toISOString(),
          DateCompleted: this.state.dateCompleted ? new Date(this.state.dateCompleted).toISOString() : ''
      }

      
   console.log(tripObject);

   axios.put(`api/Trips/UpdateTrip/${id}`, tripObject).then(result => {
    history.push("/trips");
   })
  }

  render() {
     
    return (
        <div className="trip-form" >
        <h3>Add new trip</h3>
        <form>
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
                <button type="submit" className="btn btn-default" onClick={this.onUpdateCancel}>Cancel</button>
                <button type="submit" className="btn btn-success" onClick={this.updateTrip}>Update trip</button>
            </div>
        </form>
    </div>
    );
  }
}
