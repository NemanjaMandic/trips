import React, { Component } from 'react';
import axios from 'axios';
export class Trips extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
        trips: [],
        loading: true,
        failed: false,
        error: ''
     };
    
  }

  componentDidMount(){
      this.populateTripsData()
  }

  onTripUpdate = (id) => {
    const { history } = this.props;
    history.push(`/update/${id}`)
  }

  onTripDelete = (id) => {
    const { history } = this.props;
    history.push(`/delete/${id}`)
  }

  populateTripsData = () => {
    axios.get("api/Trips/GetTrips").then(result => {
        const response = result.data;
        this.setState({trips: response, loading: false, failed: false, error: ""});
    }).catch(error => {
      this.setState({trips: [], loading: false, failed: true, error: "Trips could not be loaded"});
    })
  }
 renderAlltripsTable = () => {
  return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Date started</th>
                  <th>Date completed</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>

              {this.state.trips.map(trip => {
                  return(
                      <tr key={trip.id}>
                          <td>{trip.name}</td>
                          <td>{trip.description}</td>
                          <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                          <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toLocaleDateString() : '-'}</td>
                          <td> 
                              <div className="form-group">
                                <button onClick={() => this.onTripUpdate(trip.id)} className="btn btn-success">
                                    Update
                                </button>
                                <button onClick={() => this.onTripDelete(trip.id)} className="btn btn-danger">
                                    Delete
                                </button>
                              </div>
                          </td>
                      </tr>
                  )
              })}
             
          </tbody>
      </table>
  )
}
  render() {
      const content = this.state.loading ? (
          <p><em>Loading...</em></p>
      ) : (
          this.state.failed ? (
            <div className="text-danger">
              {this.state.error}
            </div>
          ) : (this.renderAlltripsTable())
      )
    return (
      <div>
        <h1>All trips</h1>

        <p>Here you can see all trips.</p>


        { content }
      </div>
    );
  }
}
