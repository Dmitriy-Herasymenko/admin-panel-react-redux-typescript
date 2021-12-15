interface IColumns {
    title: string,
    key: string,
    sort?: boolean,
    edit?: boolean,
    delete?: boolean
}

export interface IProps {
    columns: IColumns[],
    rows: Array<any>
}