import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from './CreateForm';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function FormList() {
  const formList =  JSON.parse(localStorage.getItem("form")) || [] ;
  const [forms, setForms] = useState(formList);
  const [search, setSearch] = useState("");
  
  const handleDelete = (e) => {
    const targetId = e.target.id;
    forms.forEach(form => {
      if (form.name === targetId) {
        let index = forms.findIndex(form => form.name === targetId);
        forms.splice(index, 1);
        setForms(filteredForms(forms));
        localStorage.setItem("form",  JSON.stringify(forms));
        alertify.error("Form has been deleted!")
      }
    })
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredForms = (formData) => formData.filter(form =>
    form.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-4">
        <input 
          type="search" 
          className="form-control w-50" 
          placeholder="Search forms by name..."
          onChange={handleSearch}
        />
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#createFormModal">
          Create New Form
        </button>

        <div className="modal fade bd-example-modal-lg" id="createFormModal" tabindex="0" role="dialog" aria-labelledby="createFormModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createFormModalLongTitle">Create Form</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CreateForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Form Name</th>
            <th scope="col">Description</th>
            <th scope="col">Created At</th>
            <th scope="col">Form Link</th>
          </tr>
        </thead>
        <tbody>
          {
            forms.length
            ? filteredForms(forms).map((form, index) => {
              let url = form.name;
              url = url.replace(/ /g, '-');
              return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{form.name}</td>
                <td>{form.description}</td>
                <td>{form.createdAt}</td>
                <td>
                  <Link 
                    className="btn btn-info"
                    to={{
                      pathname: `/forms/${url}`
                    }}
                  >
                    To See Form
                  </Link>
                  <button 
                    className="btn btn-danger ml-2"
                    onClick={handleDelete}
                    id={form.name}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )})
            : (
              <tr>
                <th scope="row" colSpan="5" className="text-center">You didn't create a form yet!</th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default FormList;
