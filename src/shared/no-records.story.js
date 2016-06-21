import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import NoRecords from './no-records';

storiesOf('shared.NoRecords', module)

    .add('default', () => (
        <NoRecords />
    ))
;