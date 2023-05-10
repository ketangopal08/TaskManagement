import iDataBase from "./iDataBase";


export class firebaseDB implements iDataBase{
    getData(tableName: string, id?: any, condition?: string | undefined): any[] {
        throw new Error("Method not implemented.");
    }
    addData(tableName: string) {
        throw new Error("Method not implemented.");
    }
    setData(tableName: string, id?: any, condition?: string | undefined): any[] {
        throw new Error("Method not implemented.");
    }
    
}