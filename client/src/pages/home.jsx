import React from 'react';
import NavBar from '../components/navBar';
import HiThere from '../components/hiThere/index';
import Services from '../components/services/index';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HiThere />
        <Services />
      </div>
    )
  }
};

export default HomePage;