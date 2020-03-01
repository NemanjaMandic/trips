import React, { Component } from 'react';

export class Trips extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
        trips: [],
        loading: true
     };
    
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
              <tr>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>- </td>
              </tr>
              <tr>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>A</td>
                  <td>- </td>
              </tr>
          </tbody>
      </table>
  )
}
  render() {
      const content = this.state.loading ? (
          <p><em>Loading...</em></p>
      ) : (
          this.renderAlltripsTable(this.state.trips)
      )
    return (
      <div>
        <h1>All trips</h1>

        <p>Here you can see all trips.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        { content }
      </div>
    );
  }
}
