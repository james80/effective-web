import React from 'react';
import ReactDataGrid from 'react-data-grid';
import NoRecords from '../../shared/no-records'

const CompaniesGrid = (props) => {

  const handleEditCompany = (id) => props.editCompanyCallback(id);
  const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

  const companiesHeader = [
    {key: 'id', name: 'ID'},
    {key: 'name', name: 'Name'},
    {key: 'description', name: 'Description'},
    {name: 'Action'}
  ]

  const rowGetter = function (i) {
    return props.companiesData[i];
  };

  return (
      <div>
        <ReactDataGrid
            columns={ companiesHeader }
            rowGetter={ rowGetter }
            rowsCount={ props.companiesData.length }
            minHeight={ 500 }
            enableRowSelect='multi'
            emptyRowsView={ NoRecords }
        />
      </div>
  );
};

const { arrayOf, func, string, shape } = React.PropTypes;

const companyShape = {
  id: string,
  name: string,
  description: string
}

CompaniesGrid.propTypes = {
  companiesData: arrayOf(shape(companyShape)),
  editCompanyCallback: func,
  deleteCompanyCallback: func
};

CompaniesGrid.defaultProps = {
  companiesData: {}
};

export default CompaniesGrid;
