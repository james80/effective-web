import React from "react";
import CompaniesGrid from "./companies-grid/companies-grid";

const Companies = (props) => {

  const handleAddCompany = () => props.addCompanyCallback();
  const handleEditCompany = (id) => props.editCompanyCallback(id);
  const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

  return (
      <div>
        <h3>Soon to be CompaniesHeader...</h3>
        <CompaniesGrid companiesData={ props.companies }/>
      </div>
  );
};

const {arrayOf, func, string, shape} = React.PropTypes;

const companyShape = {
  id: string,
  name: string,
  description: string
}

Companies.propTypes = {
  companies: arrayOf(shape(companyShape)),
  addCompanyCallback: func,
  editCompanyCallback: func,
  deleteCompanyCallback: func
};

Companies.defaultProps = {
  companies: {}
};

export default Companies;
