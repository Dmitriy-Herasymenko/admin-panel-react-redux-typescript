
export const sortRows = (rows:any, sort:boolean) => {
    const sortArray: any = [...rows].sort((a, b) => sort ? a.title < b.title ?  -1 : 1 : a.title > b.title ?  -1 : 1)
    return sortArray;
};