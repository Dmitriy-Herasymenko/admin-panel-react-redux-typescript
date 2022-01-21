
export interface ITableData {
    typeRequest?: string;
    idRow?: number;
    title?: string;
    isEdit? : boolean;
}

export interface ITableState {
    statusTablePut: boolean,
    statusTableDelete: boolean,
    isSort: boolean,
    isEdit: boolean,
    isOpenDialog: boolean,
    idRow: number,
    tableData?: ITableData
}

export interface IColumn {
    title: string;
    key: string;
    sort?: boolean;
    edit?: boolean;
    delete?: boolean;
}

export interface IBody {
    columns: IColumn[];
    rows: Record<string, any>;
    pagination: boolean;
}

export interface ITableProps {
    columns: IColumn[];
    rows: Record<string, any>;
    pagination?: boolean;
}