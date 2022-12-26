import React from 'react'
import Askvitheader from './Askvitheader'
import Feed from './Feed';

import './css/askvit.css';
import { Provider } from 'react-redux';

function Askvit() {
  return (
    <div className="askvit">
      <Askvitheader />
      <div className="askvit__contents">
        <div className="askvit__content">
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Askvit;