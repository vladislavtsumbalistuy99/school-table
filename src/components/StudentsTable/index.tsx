import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {
  attendanceSelector,
  columnLoadingSelector,
  columnSelector,
  studentsLoadingSelector,
  studentsSelector,
} from '../../redux/selectors';
import { IColumn, IStudentsRows } from '../../interfaces';
import { getAttendance, postRate, postUnRate } from '../../queries';
import Loader from '../Loader';
import { makeStudentInfoRows } from '../../utils/helper';

const StudentsTable = () => {
  const dispatch = useDispatch();
  const [studentRows, setStudentRows] = React.useState<IStudentsRows[] | null>(null);
  const column = useSelector(columnSelector);
  const students = useSelector(studentsSelector);
  const attendance = useSelector(attendanceSelector);
  const studentsLoading = useSelector(studentsLoadingSelector);
  const columnLoading = useSelector(columnLoadingSelector);

  const onAttendanceRowClick = async (isN: boolean, studentId: number, columnId: number) => {
    isN
      ? await postUnRate(dispatch, studentId, columnId).then(() => getAttendance(dispatch))
      : await postRate(dispatch, studentId, columnId).then(() => getAttendance(dispatch));
  };

  useEffect(() => {
    const res = makeStudentInfoRows(students, column, attendance);
    setStudentRows(res);
  }, [students, column, attendance]);

  return (
    <>
      {studentsLoading || columnLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper} style={{ maxHeight: '560px', overflow: 'auto' }}>
          <Table
            aria-label="simple table"
            style={{
              minWidth: '650px',
              position: 'relative',
              width: '100%',
              overflow: 'auto',
              borderCollapse: 'separate',
            }}
          >
            <TableHead
              style={{
                position: 'sticky',
                top: 0,
                backgroundColor: '#1976D2',
                borderBottom: '1px solid rgba(224, 224, 224, 1)',
              }}
            >
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell align="left">Student</TableCell>
                {column?.Items?.map((col: IColumn['Items'][0]) => (
                  <TableCell align="left" key={col.Id}>
                    {col.Title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {studentRows?.map((row: IStudentsRows, index: number) => (
                <TableRow key={row.Id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">
                    {`${row.FirstName || ''} ${row.SecondName || ''} ${row.LastName || ''}`}
                  </TableCell>
                  {row.att.map((att) => (
                    <TableCell
                      key={att.id}
                      align="left"
                      style={{ cursor: 'pointer' }}
                      onClick={() => onAttendanceRowClick(att.isN, row.Id, att.id)}
                    >
                      {att.isN ? 'H' : ''}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default StudentsTable;
