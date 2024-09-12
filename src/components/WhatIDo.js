import React, { Component } from "react";
import "../styled-components/WhatIDo.css";
import Skills from './Skills';

class WhatIDo extends Component {
  render() {
    return (
      <div id="whatIDo" className="WhatIDo">
        <div className='heading-what-I-do'>
          <h2>What I do!</h2>
          <h3>recreate Xperiences</h3>
        </div>

        {/* ______SKILL HIGHLIGHTS______ */}
        <Skills />
      </div >
    );
  }
}

export default WhatIDo;