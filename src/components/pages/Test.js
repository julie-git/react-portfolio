import React from "react";
import NavTabs from "../../components/NavTabs";
import "../../components/pages/Home.css";

class Header extends React.Component {
    constructor() {
      super()
    
      this.state = {
        offset: 0
      };
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

return (
    <header 
      className='header-background'
      style={{ backgroundPositionY: this.state.offset}}
    >
      <section
        className='info-container'
        style={{ bottom: this.state.offset / 2 }}
      >
        <h1>Kevin Simpson</h1>
        <h3>Front End Developer</h3>
      </section>
    </header>
  )