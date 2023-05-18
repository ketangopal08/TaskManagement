import { firebaseDB } from "./firebase";
import iDataBase from "../interfaces/iDataBase";


export default function DataBase():iDataBase{
    return new firebaseDB();
}


