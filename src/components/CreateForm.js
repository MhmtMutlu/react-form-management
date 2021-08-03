import React, { useState } from 'react';

function CreateForm() {
  const initialFormValues = JSON.parse(localStorage.getItem("form"));
  const arr = initialFormValues ? [...initialFormValues] : [];
  const [newForm, setNewForm] = useState({
    "name": "", 
    "description": "",
    createdAt: "", 
    fields: [ 
      { 
        "required": true, 
        "name": "", 
        dataType: ""
      },
      { 
        "required": true, 
        "name": "", 
        dataType: "" 
      },
      {
        "required": true, 
        "name": "", 
        dataType: "" 
      } 
    ] 
  });

  const handleChange = (e, object) => {
    let key = e.target.name;
    let value = e.target.value;
    object[key] = value;
    setNewForm({...newForm});
  }

  const handleSubmit = () => {
    const newFormObj = {...newForm};
    arr.push(newFormObj);
    localStorage.setItem("form", JSON.stringify(arr));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label class="form-label" htmlFor="name">Form Name</label>
          <input 
            class="form-control" 
            type="text" 
            name="name" 
            id="name" 
            value={newForm.name}
            onChange={(e) => handleChange(e, newForm)}
            required
          />
        </div>
        <div className="mt-2">
          <label class="form-label" htmlFor="description">Form Description</label>
          <input 
            class="form-control" 
            type="text" 
            name="description" 
            id="description"
            value={newForm.description}
            onChange={(e) => handleChange(e, newForm)}
            required
          />
        </div>
        <div className="mt-2">
          <label class="form-label" htmlFor="createdAt">Created Date</label>
          <input 
            class="form-control" 
            type="date" 
            name="createdAt" 
            id="createdAt"
            value={newForm.createdAt}
            onChange={(e) => handleChange(e, newForm)}
            required
          />
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <h4 className="mt-2">First Input</h4>
            <div className="mt-2">
              <label class="form-label" htmlFor="firstInputName">Input Name</label>
              <input 
                class="form-control" 
                type="text" 
                name="name" 
                id="firstInputName"
                value={newForm.fields[0].name}
                onChange={(e) => handleChange(e, newForm.fields[0])}
                required
              />
            </div>
            <div className="mt-2">
              <p class="form-label" htmlFor="firstSelectOption">Input Data Type</p>
              <select 
                id="firstSelectOption"
                name="dataType" 
                class="form-select" 
                aria-label="Default select example"
                value={newForm.fields[0].dataType}
                onChange={(e) => handleChange(e, newForm.fields[0])}
              >
                <option value="" selected disabled>Select a value</option>
                <option value="NUMBER">Number</option>
                <option value="STRING">String</option>
                <option value="DATE">Date</option>
                <option value="EMAIL">Email</option>
                <option value="PASSWORD">Password</option>
              </select>
            </div>
            <div className="mt-2">
              <p class="form-label" htmlFor="firstRequiredOption">Is Input Required</p>
              <select 
                id="firstRequiredOption"  
                name="required"
                class="form-select" 
                aria-label="Default select example"
                value={newForm.fields[0].required}
                onChange={(e) => handleChange(e, newForm.fields[0])}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
          <div className="col-4">
            <h4 className="mt-2">Second Input</h4>
            <div className="mt-2">
              <label class="form-label" htmlFor="secondInputName">Input Name</label>
              <input 
                class="form-control" 
                type="text" 
                name="name" 
                id="secondInputName"
                value={newForm.fields[1].name}
                onChange={(e) => handleChange(e, newForm.fields[1])}
                required
              />
            </div>
            <div className="mt-2">
              <p class="form-label" htmlFor="secondSelectOption">Input Data Type</p>
              <select 
                id="secondSelectOption" 
                name="dataType" 
                class="form-select" 
                aria-label="Default select example"
                value={newForm.fields[1].dataType}
                onChange={(e) => handleChange(e, newForm.fields[1])}
              >
                <option value="" selected disabled>Select a value</option>
                <option value="NUMBER">Number</option>
                <option value="STRING">String</option>
                <option value="DATE">Date</option>
                <option value="EMAIL">Email</option>
                <option value="PASSWORD">Password</option>
              </select>
            </div>
            <div className="mt-2">
              <p class="form-label" htmlFor="secondRequiredOption">Is Input Required</p>
              <select 
                id="secondRequiredOption"  
                name="required"
                class="form-select" 
                aria-label="Default select example"
                value={newForm.fields[1].required}
                onChange={(e) => handleChange(e, newForm.fields[1])}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
          <div className="col-4">
            <h4 className="mt-2">Third Input</h4>
            <div className="mt-2">
              <label class="form-label" htmlFor="thirdInputName">Input Name</label>
              <input 
                class="form-control" 
                type="text" 
                name="name" 
                id="thirdInputName"
                value={newForm.fields[2].name}
                onChange={(e) => handleChange(e, newForm.fields[2])}
                required
              />
            </div>
            <div className="mt-2">
              <p class="form-label" htmlFor="thirdSelectOption">Input Data Type</p>
              <select 
                id="thirdSelectOption" 
                name="dataType" 
                class="form-select" 
                aria-label="Default select example"
                value={newForm.fields[2].dataType}
                onChange={(e) => handleChange(e, newForm.fields[2])}
              >
                <option value="" selected disabled>Select a value</option>
                <option value="NUMBER">Number</option>
                <option value="STRING">String</option>
                <option value="DATE">Date</option>
                <option value="EMAIL">Email</option>
                <option value="PASSWORD">Password</option>
              </select>
            </div>
            <div className="mt-2">
              <p class="form-label" htmlFor="thirdRequiredOption">Is Input Required</p>
              <select 
                id="thirdRequiredOption" 
                name="required"
                class="form-select" 
                aria-label="Default select example"
                value={newForm.fields[2].required}
                onChange={(e) => handleChange(e, newForm.fields[2])}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-secondary w-100 mt-3">Submit</button>
      </form>
    </div>
  )
}

export default CreateForm;
