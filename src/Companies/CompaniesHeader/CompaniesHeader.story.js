import React from "react";
import {storiesOf, action, linkTo} from "@kadira/storybook";
import CompaniesHeader from "./CompaniesHeader";

storiesOf('companies.CompaniesHeader', module)
    
    .add('default', () => (
        <CompaniesHeader />
    ))
;