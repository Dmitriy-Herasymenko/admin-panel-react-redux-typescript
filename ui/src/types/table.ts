interface IColumn {
    title: string;
    key: string;
    sort?: boolean;
    edit?: boolean;
    delete?: boolean;

}

export interface IProps {
    columns: IColumn[];
    rows: Array<any>;
    pagination?: boolean | undefined;
}