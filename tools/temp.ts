/**
 * @author Leviathenn
 */
import {existsSync, mkdirSync, readFile, readFileSync, rmSync, writeFileSync, type PathLike} from "node:fs"
import { tmpdir } from "node:os";

export class temp{
    private tempFolder!: PathLike;
    
    write(content: string): string{
        let gr = this.generateString(28);
        if(existsSync(`${this.tempFolder}/${gr}`)){
            gr = this.generateString(29);
        }else{
            writeFileSync(`${this.tempFolder}/${gr}`,content);
        }
        return gr;
    }
    read(key: string): Buffer{
        return readFileSync(`${this.tempFolder}/${key}`);
    }
    private generateString(length: number){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    constructor(){
        
        
        let fP: string = this.generateString(28)
        let tmpDir = tmpdir();
        if(existsSync(`${tmpDir}/${fP}`)){
            rmSync(`${tmpDir}/${fP}`,{recursive: true, force: true});
            this.tempFolder = `${tmpdir}/${fP}`;
        }else{
            mkdirSync(`${tmpDir}/${fP}`);
            this.tempFolder = `${tmpDir}/${fP}`;
        }
    }
}