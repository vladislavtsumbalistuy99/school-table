import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainInfoBlock from '../../components/MainInfoBlock';
import { getColumns, getStudents } from '../../queries';

const MainInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getStudents(dispatch);
    getColumns(dispatch);
  }, [dispatch]);

  return (
    <Box
      style={{
        display: 'flex',
        padding: '60px 80px',
        justifyContent: 'center',
      }}
    >
      <MainInfoBlock />
    </Box>
  );
};

export default MainInfo;
