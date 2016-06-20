import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Companies from './companies';
import './companies.css';

const sharedCompany = {
  id: '12345',
  name: 'Quattro Gatti',
  description: 'This is a Super Awesome Company!'
};

storiesOf('Companies', module)
    .add('No Companies', () => (
        <Companies companies={ [ ] } />
    ))

    //.add('One Company', () => (
    //    <Companies companies={ [ { ...sharedCompany, id:5432 } ] } />
    //))
;