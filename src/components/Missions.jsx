import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const totalMissions = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ totalMissions } />
        <ul>
          { missions
            .map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            )) }
        </ul>
      </div>
    );
  }
}

export default Missions;
