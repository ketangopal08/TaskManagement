import { firebaseDB } from "./firebase";
import iDataBase from "./iDataBase";


export default function DataBase():iDataBase{
    return new firebaseDB();
}


