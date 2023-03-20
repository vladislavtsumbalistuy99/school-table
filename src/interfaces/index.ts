export interface IStudents {
  Items: {
    Id: number;
    FirstName: number;
    SecondName: number;
    LastName: number;
  }[];
  Quantity: number;
}

export interface IColumn {
  Items: {
    Id: number;
    Title: string;
    SchoolboyId: number;
    ColumnId: string;
  }[];
  Quantity: number;
}

export interface IAttendance {
  Items: {
    Id: number;
    Title: string;
    SchoolboyId: number;
    ColumnId: string;
  }[];
  Quantity: number;
}

export interface IStudentsRows {
  Id: number;
  FirstName: number;
  SecondName: number;
  LastName: number;
  att: {
    id: number;
    nameCol: string;
    isN: boolean;
  }[];
}

export interface IState {
  students: {
    data: IStudents;
    isLoading: boolean;
    error: boolean;
  };
  columns: {
    data: IColumn;
    isLoading: boolean;
    error: boolean;
  };
  attendance: {
    data: IAttendance;
    isLoading: boolean;
    error: boolean;
  };
  rate: {
    data: any;
    isLoading: boolean;
    error: boolean;
  };
}
