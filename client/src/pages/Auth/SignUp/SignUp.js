import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import * as actions from '../../../redux/actions';

import { FormContainer, FormWrapper, StyledForm } from '../../../components/Forms/FormLayouts';
import Heading from '../../../components/Heading/Heading';
import Button from '../../../components/Button/Button';
import Message from '../../../components/Message/Message';
import Input from '../../../components/Forms/Input/Input';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const StyledLink = styled(Link)`
  margin-top: 4.5rem;
  font-size: 1.3rem;
  color: var(--color-mainBlue);
`;

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('The first name is required.')
    .min('3', 'Too short.')
    .max('25', 'Too long.'),
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min('6', 'The password too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const SignUp = () => {
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
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await dispatch(actions.signUp(values));
          setSubmitting(false);
        }}>
        {({ isSubmitting, isValid, dirty }) => (
          <FormWrapper>
            <Heading size='h2' color='white'>
              Sign up
            </Heading>
            <Heading size='h4' color='white' bold mBottom='2rem'>
              Please fill the fields for signup
            </Heading>

            <StyledForm>
              <Field type='text' name='name' placeholder='Your first name...' component={Input} />
              <Field type='email' name='email' placeholder='Your email...' component={Input} />
              <Field
                type='password'
                name='password'
                placeholder='Your password...'
                component={Input}
              />
              <Field
                type='password'
                name='confirmPassword'
                placeholder='Re-type your password...'
                component={Input}
              />
              <Button
                disabled={!(isValid && dirty) || isSubmitting}
                loading={loading ? 'Signing up' : null}
                type='submit'>
                Sign up
              </Button>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
            <StyledLink to='/login'>Login</StyledLink>
          </FormWrapper>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SignUp;
