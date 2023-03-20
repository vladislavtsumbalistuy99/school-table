import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IColumn } from '../../interfaces';
import {
  columnLoadingSelector,
  columnSelector,
  studentsLoadingSelector,
  studentsSelector,
} from '../../redux/selectors';
import { findMaxColumnNameSum } from '../../utils/helper';
import Loader from '../Loader';

const MainInfoBlock = () => {
  const students = useSelector(studentsSelector);
  const column = useSelector(columnSelector);
  const studentsLoading = useSelector(studentsLoadingSelector);
  const columnLoading = useSelector(columnLoadingSelector);

  const [maxColumnNameSum, setMaxColumnNameSum] = React.useState<IColumn['Items'][0] | null>(null);

  React.useEffect(() => {
    setMaxColumnNameSum(findMaxColumnNameSum(column));
  }, [column]);

  return (
    <>
      {studentsLoading || columnLoading ? (
        <Loader />
      ) : (
        <Box style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '5px 15px' }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam officia voluptas quam laboriosam
            veniam minus nam ex, unde voluptate cupiditate ipsum reprehenderit quas dignissimos voluptatum suscipit
            labore tenetur hic.
          </Typography>
          <Typography>Number of students : {students?.Quantity || 0}</Typography>
          {maxColumnNameSum &&
            Object.entries(maxColumnNameSum).map(([key, value]) => (
              <Box key={key}>
                {key}-{value}
              </Box>
            ))}
        </Box>
      )}
    </>
  );
};

export default MainInfoBlock;
