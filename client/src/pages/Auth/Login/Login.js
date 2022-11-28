import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../../redux/actions';

import {
  FormContainer,
  FormWrapper,
  StyledForm,
} from '../../../components/Forms/FormLayouts';
import Heading from '../../../components/Heading/Heading';
import Button from '../../../components/Button/Button';
import Message from '../../../components/Message/Message';
import Input from '../../../components/Forms/Input/Input';
import { Link } from 'react-router-dom';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const StyledLink = styled(Link)`
  margin-top: 4.5rem;
  font-size: 1.3rem;
  color: var(--color-mainBlue);
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min('6', 'Too short.'),
});

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ auth }) => auth);
  React.useEffect(() => {
    return () => {
      dispatch(actions.clean());
    };
  }, [dispatch]);
  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(actions.login(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <FormWrapper>
            <Heading size='h2' color='white'>
              Login
            </Heading>
            <Heading size='h4' color='white' bold mBottom='2rem'>
              Please fill the fields for login
            </Heading>

            <StyledForm>
              <Field
                type='email'
                name='email'
                placeholder='Your email...'
                component={Input}
              />
              <Field
                type='password'
                name='password'
                placeholder='Your password...'
                component={Input}
              />
              <Button
                disabled={!(isValid && dirty) || isSubmitting}
                loading={loading ? 'logging in' : null}
                type='submit'
              >
                Login
              </Button>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
            <StyledLink to='/signup'>Sign Up</StyledLink>
          </FormWrapper>
        )}
      </Formik>
    </FormContainer>
  );
};

export default Login;
