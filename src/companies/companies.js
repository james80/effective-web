import React from 'react';
import './companies.css';

const Companies = (props) => {

  const handleAddCompany = () => props.addCompanyCallback();
  const handleEditCompany = (id) => props.editCompanyCallback(id);
  const handleDeleteCompany = (id) => props.deleteCompanyCallback(id);

  return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title"><strong>Companies</strong></h3>
        </div>
        <div class="panel-body">
          <button type="button" class="btn btn-default">Add Company</button>
          <hr />
          <form class="form">
            <div class="form-group">
              <div class="col-sm-12">
                <div class="input-group">
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-filter"/>
                  </div>
                  <input class="form-control" type="text" placeholder="Filter Company Name"></input>
                </div>
              </div>
            </div>
          </form>
          <table class="table table-condensed">
            <thead>
            <tr>
              <th>
                <div class="col-sm-2">
                  <a role="button"> Company ID </a>
                </div>
                <div class="col-sm-4">
                  <a role="button"> Company Name </a>
                </div>
                <div class="col-sm-5">Description</div>
                <div class="col-sm-1">Action</div>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <div class="col-sm-2"><strong>Company ID</strong></div>
                <div class="col-sm-4">Company Name</div>
                <div class="col-sm-5">Company Description</div>
                <div class="col-sm-1">
                  <a role="button"><span class="glyphicon glyphicon-pencil pull-left"></span></a>
                  <a role="button"><span class="glyphicon glyphicon-remove pull-right"></span></a>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

const { arrayOf, func, string, shape } = React.PropTypes;

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
