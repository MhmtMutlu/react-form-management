import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Forms({ template, onSubmit }) {
  let { register, handleSubmit } = useForm();
  let { name, description, createdAt, fields } = template;

  const renderFields = (fields) => {
    return fields.map(field => {
      let { name, required, dataType } = field;

      switch (dataType) {
        case "STRING":
          return (
            <div key={name}>
              <label class="form-label" htmlFor={name}>{name}</label>
              <input class="form-control" type="text" name={name} id={name} required={required} {...register(`${name}`)} />
            </div>
          )
        case "NUMBER":
          return (
            <div key={name}>
              <label class="form-label" htmlFor={name}>{name}</label>
              <input class="form-control" type="number" name={name} id={name} required={required} {...register(`${name}`)} />
            </div>
          )
        case "DATE":
          return (
            <div key={name}>
              <label class="form-label" htmlFor={name}>{name}</label>
              <input class="form-control" type="date" name={name} id={name} required={required} {...register(`${name}`)} />
            </div>
          )
        case "EMAIL":
          return (
            <div key={name}>
              <label class="form-label" htmlFor={name}>{name}</label>
              <input class="form-control" type="email" name={name} id={name} required={required} {...register(`${name}`)} />
            </div>
          )
        case "PASSWORD":
          return (
            <div key={name}>
              <label class="form-label" htmlFor={name}>{name}</label>
              <input class="form-control" type="password" name={name} id={name} required={required} {...register(`${name}`)} />
            </div>
          )
        default:
          return (
            <div key={name}>
              <label class="form-label" htmlFor={name}>{name}</label>
              <input 
                class="form-control" 
                type="email" 
                name={name} 
                id={name} 
                required={required} 
                {...register(`${name}`)} 
                placeholder="Invalid field type..."
                readOnly
              />
            </div>
          )
      }
    })
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="display-4 mb-4"><strong>{name}</strong></h4>
        <p>{description}</p>
        <p className="text-muted">This form created at {createdAt}</p>
        {renderFields(fields)}
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-secondary ml-2">Go to Home</Link>
      </form>
    </div>
  )
}

export default Forms;
