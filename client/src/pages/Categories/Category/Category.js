import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CategoriesForm from '../CategoriesForm/CategoriesForm';
import DeleteCategory from '../DeleteCategory/DeleteCategory';

const Wrapper = styled.div`
  word-wrap: break-word;
  width: 100%;
  position: relative;
  padding: 5rem 3rem;
  background-color: var(--color-mainLight);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-mainDark);
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const StyledP = styled.p`
//   font-size: 1.2rem;
//   color: var(--color-mainDark);
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
// `;
const useStyles = makeStyles(() => ({
  deleteIcon: {
    color: '#ff5454',
    backgroundColor: '#FBF8F8',
    margin: 15,
    width: 30,
    height: 30,
    '&:hover': {
      color: '#FBF8F8',
      backgroundColor: '#ff5454',
    },
  },
  editIcon: {
    color: '#548CA8',
    backgroundColor: '#FBF8F8',
    margin: 15,
    width: 30,
    height: 30,
    '&:hover': {
      color: '#FBF8F8',
      backgroundColor: '#548CA8',
    },
  },
}));

const Category = ({ category }) => {
  const classes = useStyles();
  const [isDeleting, setisDeleting] = React.useState(false);
  const [isEditing, setisEditing] = React.useState(false);

  return (
    <Wrapper>
      {category.name}
      <Controls>
        <IconButton className={classes.editIcon} onClick={() => setisEditing(true)}>
          <EditIcon fontSize='large' />
        </IconButton>
        <IconButton className={classes.deleteIcon} onClick={() => setisDeleting(true)}>
          <DeleteIcon fontSize='large' />
        </IconButton>
        <CategoriesForm
          editCategory={category}
          opened={isEditing}
          close={() => setisEditing(false)}
        />
        <DeleteCategory
          category={category}
          opened={isDeleting}
          close={() => setisDeleting(false)}
        />
      </Controls>
    </Wrapper>
  );
};

export default Category;
