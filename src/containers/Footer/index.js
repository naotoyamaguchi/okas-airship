import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
    	<footer className="footer">
    	  <div className="container">
    	    <span className="text-muted">Place sticky footer content here.</span>
    	  </div>
    	</footer>
      // <div className="footer">
      //   94-173 Leokane St. Waipahu, HI 96797 | (808) 677-5474 | Hours 7:30am-4:30pm M-F | Site by MR. YAMAGUCHI
      // </div>
    );
  }
}

export default Footer;