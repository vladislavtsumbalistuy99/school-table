import { IStudents, IColumn, IAttendance } from './../interfaces/index';

export const findMaxColumnNameSum = (column: IColumn) => {
  const maxSum = column?.Items?.reduce(
    (acc, item, index) => {
      const sum = +item.Title.split('/')[0] + +item.Title.split('/')[1];
      if (acc.maxNum > sum) {
        return acc;
      } else return { maxNum: sum, index: index };
    },
    { maxNum: 0, index: 0 }
  );
  return column?.Items[maxSum.index];
};

export const makeStudentInfoRows = (students: IStudents, column: IColumn, attendance: IAttendance) => {
  const studentsWithColumn = [];
  for (let i = 0; i < students?.Items.length; i++) {
    const att = [];
    for (let j = 0; j < column?.Items.length; j++) {
      att.push({
        id: column.Items[j].Id,
        nameCol: column.Items[j].Title,
        isN: !!attendance?.Items.find(
          (el) => +el.SchoolboyId === +students?.Items[i].Id && +el.ColumnId === column.Items[j].Id
        ),
      });
    }
    studentsWithColumn.push({ ...students.Items[i], att });
  }
  return studentsWithColumn;
};
