import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const totalMissions = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ totalMissions } />
      </div>
    );
  }
}

export default Missions;
