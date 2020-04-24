export default function validateCreateAccount(values) {
  let errors = {};

  if(!values.name) {
    errors.name = 'The name is required';
  }

  if(!values.email) {
    errors.email = 'The email is required';
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email not valid';
  }

  if(!values.password) {
    errors.password = 'The password is required';
  } else if(values.password.length < 6) {
    errors.password = 'The password must be at least 6 characters'
  }
  
  return errors;
}