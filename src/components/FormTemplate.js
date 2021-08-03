import React from 'react';
import { useParams } from 'react-router-dom';
import Forms from './Forms';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function FormTemplate() {
  let template = {};
  let { formname } = useParams();
  formname = formname.replace(/-/g, ' ');
  
  const formList =  JSON.parse(localStorage.getItem("form"));
  formList.forEach(form => {
    if (form.name === formname) {
      template = form;
    }
  });

  const onSubmit = data => {
    console.log(data);
    alertify.success("Check console to see values!");
  };


  return (
    <Forms template={template} onSubmit={onSubmit} />
  )
}

export default FormTemplate;
