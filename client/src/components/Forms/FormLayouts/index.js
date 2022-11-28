import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 6rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  @media ${(props) => props.theme.mediaQueries.small} {
    padding: 3rem 4rem;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
`;
