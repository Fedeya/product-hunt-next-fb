import { css } from '@emotion/core';

import Layout from '../components/layout/Layout';
import { Form, Field, SubmitButton, Error } from '../components/ui/Form';

import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

const initialState = {
  name: '',
  email: '',
  password: ''
};

export default function CreateAccount() {

  const createAccount = () => {
    console.log('creating account');
  }

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, validateCreateAccount, createAccount);

  const { name, email, password } = values;

  return (
    <Layout>
      <h1
        css={css`
          text-align: center;
          margin-top: 5rem;
        `}
      >
        Create Account
      </h1>
      <Form onSubmit={handleSubmit} noValidate>
        <Field>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.name && <Error>{errors.name}</Error>}

        <Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>
        
        {errors.email && <Error>{errors.email}</Error>}

        <Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>
        {errors.password && <Error>{errors.password}</Error>}

        <SubmitButton type="submit">
          Create Account
        </SubmitButton>
      </Form>
    </Layout>
  );
}