import { Alignment, Button, Navbar } from '@blueprintjs/core';
import React from 'react';
import CgtCalculator from '../cgt-calculator/cgt-calculator.component';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../../../node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css';

import './layout.styles.css';

export default class Layout extends React.Component {
  public render() {
    return (
      <div className='layout'>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>ASX CGT Tool</Navbar.Heading>
            <Navbar.Divider />
            <Button className='bp3-minimal' icon='home' text='Home' />
            <Button className='bp3-minimal' icon='document' text='Files' />
          </Navbar.Group>
        </Navbar>

        <CgtCalculator />
      </div>
    );
  }
}
