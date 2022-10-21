import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const planetTitle = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ planetTitle } />
      </div>
    );
  }
}

export default SolarSystem;
