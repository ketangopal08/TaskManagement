export default interface iDataBase{
    getData(tableName:string,id?:any,condition?:string):Array<any>
    addData(tableName:string):any
    setData(tableName:string,id?:any,condition?:string):Array<any>
}