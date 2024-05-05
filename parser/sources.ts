/**
 * @author Leviathenn
 */

import axios, { AxiosError } from "axios";
import type { ISource } from "../Interfaces/ISource"
import type { ITSource } from "../Interfaces/ITSource";
import { writeFileSync } from "node:fs";
import type { ITPConfig } from "../Interfaces/ITPConfig";
import type { ITConfig } from "../Interfaces/ITConfig";

export class Sources{
    private sources: ISource[]
    get(itpc: ITPConfig){
        let stopped = false;
        this.sources.map((v,i)=>{
            v.components.map((k,g)=>{
                if(i == this.sources.length && !stopped){
                    axios.get(`${v.url}/${k}/${itpc.tool}`).then((req)=>{
                        writeFileSync(itpc.path,req.data);
                        itpc.callback(true);
                        stopped = true;
                    }).catch((err: AxiosError)=>{
                        writeFileSync("error.log",err.cause?.message||"Unable to pull error message.");
                        stopped = true;
                        itpc.callback(false);
                    });
                }else{
                    if(stopped){
    
                    }else{
                        axios.get(`${v.url}/${k}/${itpc.tool}`).then((req)=>{
                            writeFileSync(itpc.path,req.data);
                            itpc.callback(true);
                            stopped = true;
                        }).catch((err: AxiosError)=>{
                            //writeFileSync("error.log",err.cause?.message||"Unable to pull error message.");
                        });
                    };
                };
            })
            
                
            
            
        });
    }
    constructor (src: ISource[]){
        this.sources = src;
    }
}

export class ToolSources{
    private sources: ITSource[]
    get(itpc: ITPConfig){
      
        this.sources.map((v,i)=>{
            let selected = v["cfg"][itpc.selected].replace("$TOOL",itpc.tool);
            
            axios.get(`https://${v.url}/${selected}`).then((req)=>{
                writeFileSync(itpc.path,req.data);
            }).catch((err: AxiosError)=>{
                writeFileSync("error.log",err.cause?.message||"Unable to pull error message.");
                itpc.callback(false);
            });
        })
    }
    constructor (src: ITSource[]){
        this.sources = src;
        console.log(src);
    }
}