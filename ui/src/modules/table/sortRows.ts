
export const sortRows = (rows:any, setSort:any, setSortArray:any, sort:any) => {
    const sortArray: any = [...rows].sort((a, b) => sort ? a.title < b.title ?  -1 : 1 : a.title > b.title ?  -1 : 1)
    setSort(!sort)
    setSortArray(sortArray)
};