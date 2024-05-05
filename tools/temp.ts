/**
 * @author Leviathenn
 */
import {type PathLike} from "node:fs"
export class temp{
    private tempFolder: PathLike;
    
    constructor(){
        
        function generateString(length: number) {
            const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        
            return result;
        }
        let fP: string = generateString(28)
        console.log(fP);
    }
}