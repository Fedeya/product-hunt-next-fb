import { useState, useEffect } from 'react';

export default function useValidation(state, validation, submit) {
  const [values, setValues] = useState(state);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if(submitForm) {
      const noErrors = Object.keys(errors).length === 0;
      
      if(noErrors) {
        submit();
      }

      setSubmitForm(false);
    }
  }, [errors])

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  }

  const handleBlur = () => {
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  }
}