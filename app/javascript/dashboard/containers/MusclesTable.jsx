import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableRow from './TableRow';

class MusclesTabe extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.muscles !== this.props.muscles);
  }

  buildTable = () => {
    return this.props.muscles.map((muscleObj) => {
      return (
        <TableRow
          rightMuscleId={`${muscleObj.name}-right`}
          leftMuscleId={`${muscleObj.name}-left`}
          name={muscleObj.name}
          rightForce={muscleObj.force_right}
          nerf={muscleObj.nerf}
          root={muscleObj.root}
          leftForce={muscleObj.force_left}
          key={muscleObj.name}
        />
      );
    });
  }

  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Right</th>
            <th scope="col">Muscle</th>
            <th scope="col">Nerf</th>
            <th scope="col">Root</th>
            <th scope="col">Left</th>
          </tr>
        </thead>
        <tbody>
          {this.buildTable()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    muscles: state.muscles
  };
}

export default connect(mapStateToProps)(MusclesTabe);
