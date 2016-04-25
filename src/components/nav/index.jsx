import React from 'react';
import Tabs from '../../../node_modules/material-ui/lib/tabs/tabs';
import Tab from '../../../node_modules/material-ui/lib/tabs/tab';
import FontIcon from '../../../node_modules/material-ui/lib/font-icon';
import ActionFlightTakeoff from '../../../node_modules/material-ui/lib/svg-icons/action/flight-takeoff';

const NavTabs = ()=>(
  <Tabs>
    <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
    <Tab icon={<ActionFlightTakeoff />} />
    <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
  </Tabs>
);

export default NavTabs;
