import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';

const Logout = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.logout());
  }, [dispatch]);
  return <div></div>;
};

export default Logout;
