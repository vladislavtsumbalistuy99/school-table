import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import StudentsTable from '../../components/StudentsTable';
import { getAttendance, getColumns, getStudents } from '../../queries';

const Students = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getStudents(dispatch);
    getColumns(dispatch);
    getAttendance(dispatch);
  }, [dispatch]);

  return (
    <Box style={{ display: 'flex', padding: '60px 80px', justifyContent: 'center' }}>
      <StudentsTable />
    </Box>
  );
};

export default Students;
