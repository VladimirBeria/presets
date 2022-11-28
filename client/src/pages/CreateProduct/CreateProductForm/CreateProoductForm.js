import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Media from 'react-media';

import * as actions from '../../../redux/actions';

import Modal from '../../../components/Modal/Modal';
import Heading from '../../../components/Heading/Heading';
import { StyledForm } from '../../../components/Forms/FormLayouts';
import Input from '../../../components/Forms/Input/Input';
import Message from '../../../components/Message/Message';
import Button from '../../../components/Button/Button';
import Select from '../../../components/Forms/Select/Select';
import File from '../../../components/Forms/File/File';

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

const addProductSchema = Yup.object().shape({
  file: Yup.mixed().required('File is required.'),
  product_id: Yup.string().required('Product ID is required.').min('2', 'Too short.'),
  title: Yup.string().required('Title is required.').min('3', 'Too short.'),
  price: Yup.number().required('Price is required.'),
  quantity: Yup.number().required('Quantity is required.'),
  description: Yup.string().required('Description is required.').min('5', 'Too short.'),
  content: Yup.string().required('Content is required.').min('5', 'Too short.'),
  category: Yup.string().required('Category is required.'),
});

const CreateProoductForm = ({ editProduct, opened, close }) => {
  const dispatch = useDispatch();

  const loadingText = editProduct ? 'Editting...' : 'Adding...';

  const categories = useSelector(({ categories }) => categories.items);
  const { error, loading } = useSelector(({ addProduct }) => addProduct);
  return (
    <Modal opened={opened} close={close}>
      <Media queries={{ small: '(max-width: 37.5em)' }}>
        {(matches) =>
          matches.small ? (
            <>
              <Heading size='h2' color='white'>
                {editProduct ? 'Edit product' : 'Add new product'}
              </Heading>
              <Heading size='h4' color='white' mBottom='1.5rem'>
                {editProduct ? 'Edit product and tap edit' : 'Type product and press add'}
              </Heading>
            </>
          ) : (
            <>
              <Heading size='h2' color='white'>
                {editProduct ? 'Edit product' : 'Add new product'}
              </Heading>
              <Heading size='h4' color='white' mBottom='4rem'>
                {editProduct ? 'Edit product and tap edit' : 'Type product and press add'}
              </Heading>
            </>
          )
        }
      </Media>

      <Formik
        initialValues={{
          file: editProduct ? editProduct.images : '',
          product_id: editProduct ? editProduct._id : '',
          title: editProduct ? editProduct.title : '',
          price: editProduct ? editProduct.price : 0,
          quantity: editProduct ? editProduct.quantity : '',
          description: editProduct ? editProduct.description : '',
          content: editProduct ? editProduct.content : '',
          category: editProduct ? editProduct.category : '',
        }}
        validationSchema={addProductSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const res = editProduct
            ? dispatch(actions.editProduct(values, editProduct._id))
            : dispatch(actions.createProduct(values));
          if (res) {
            close();
          }

          setSubmitting(false);
          resetForm();
        }}>
        {({ isSubmitting, isValid, setFieldValue, resetForm }) => (
          <StyledForm>
            <Field
              type='file'
              name='file'
              onChange={(e) => setFieldValue('file', e.target.files[0])}
              component={File}
            />
            <Field type='text' name='product_id' placeholder='Product ID...' component={Input} />
            <Field type='text' name='title' placeholder='Title...' component={Input} />
            <Field type='text' name='price' placeholder='Price...' component={Input} />
            <Field type='text' name='quantity' placeholder='Quantity...' component={Input} />
            <Field type='text' name='description' placeholder='Description...' component={Input} />
            <Field type='text' name='content' placeholder='Content...' component={Input} />
            <Field as='select' name='category' component={Select}>
              <option value='' label='Please select a category' />
              {categories.map((category) => (
                <option key={category._id} value={category._id} label={category.name} />
              ))}
            </Field>
            <ButtonsWrapper>
              <Button contain color='main' type='submit' disabled={!isValid || isSubmitting}>
                {editProduct ? 'Edit product' : 'Add product'}
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

export default CreateProoductForm;
