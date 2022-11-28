import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import styled from 'styled-components';
import Media from 'react-media';

import * as actions from '../../../redux/actions';

import { StyledForm } from '../../../components/Forms/FormLayouts';
import Heading from '../../../components/Heading/Heading';
import Input from '../../../components/Forms/Input/Input';
import Button from '../../../components/Button/Button';
import Message from '../../../components/Message/Message';
import Modal from '../../../components/Modal/Modal';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const addCategorySchema = Yup.object().shape({
  category: Yup.string().required('Category is required.').min('3', 'Too short.'),
});

const CategoriesForm = ({ editCategory, opened, close }) => {
  const loadingText = editCategory ? 'Editing...' : 'Adding...';
  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ categories }) => categories);

  return (
    <Modal opened={opened} close={close}>
      <Media queries={{ small: '(max-width: 37.5em)' }}>
        {(matches) =>
          matches.small ? (
            <>
              <Heading size='h2' color='white'>
                {editCategory ? 'Edit category' : 'Add new category'}
              </Heading>
              <Heading bold size='h4' color='white' mBottom='1.5rem'>
                {editCategory ? 'Edit category and tap edit' : 'Type category and press add'}
              </Heading>
            </>
          ) : (
            <>
              <Heading size='h2' color='white'>
                {editCategory ? 'Edit category' : 'Add new category'}
              </Heading>
              <Heading bold size='h4' color='white' mBottom='4rem'>
                {editCategory ? 'Edit category and tap edit' : 'Type category and press add'}
              </Heading>
            </>
          )
        }
      </Media>

      <Formik
        initialValues={{
          category: editCategory ? editCategory.name : '',
        }}
        validationSchema={addCategorySchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const res = editCategory
            ? dispatch(actions.editCategory(editCategory._id, values))
            : dispatch(actions.addCategory(values));
          if (res) {
            close();
          }
          setSubmitting(false);
          resetForm();
        }}>
        {({ isSubmitting, isValid, resetForm }) => (
          <StyledForm>
            <Field type='text' name='category' placeholder='Write category...' component={Input} />

            <ButtonsWrapper>
              <Button contain color='main' type='submit' disabled={!isValid || isSubmitting}>
                {editCategory ? 'Edit category' : 'Add category'}
              </Button>
              <Button
                type='button'
                color='main'
                contain
                onClick={() => {
                  close();
                  resetForm();
                }}
                loading={loading ? loadingText : null}>
                Cancel
              </Button>
            </ButtonsWrapper>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default CategoriesForm;
