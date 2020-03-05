import React, { Component } from 'react';
import axios from 'axios';

export class Delete extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        description: '',
        dateStarted: '',
        dateCompleted: ''
     };
    

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


  onDeleteCancel = () => {
   const { history } = this.props;
   history.push('/trips')
  }

  deleteTrip = (e) => {
      e.preventDefault();
      const { history } = this.props;

      const { id } = this.props.match.params;

   axios.delete(`api/Trips/DeleteTrip/${id}`).then(result => {
    history.push("/trips");
   })
  }

  render() {
     
    return (
        <div style={{ marginTop: 10 }}>
        <h2>Delete trip confirmation</h2>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title"> {this.state.name} </h4>
            <p class="card-text"> {this.state.description} </p>
            <button onClick={this.onDeleteCancel} class="btn btn-default">
              Cancel
            </button>
            <button onClick={this.deleteTrip} class="btn btn-danger">
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
