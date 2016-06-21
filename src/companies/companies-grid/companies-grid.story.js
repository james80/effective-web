import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CompaniesGrid from './companies-grid';

const sharedCompany = {
  id: '12345',
  name: 'Quattro Gatti',
  description: 'This is a Super Awesome Company!'
};

storiesOf('companies.CompaniesGrid', module)

    .add('no companies', () => (
        <CompaniesGrid companiesData={ [ ] }/>
    ))

    .add('one company', () => (
        <CompaniesGrid companiesData={ [ { ...sharedCompany } ] }/>
    ))

    //.add('multiple companies', () => (
    //    <CompaniesGrid companiesData={ [
    //    { ...sharedCompany, id: 100 },
    //    { ...sharedCompany, id: 200 },
    //    { ...sharedCompany, id: 300 }
    //    ] }/>
    //))
;