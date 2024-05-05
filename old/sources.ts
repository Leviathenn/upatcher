/**
 * @author Leviathenn
 */

import { readFileSync, type PathLike } from "fs";

export class source{
    private file: any;

    get() {
        console.log(this.file)
    }
    

    constructor(Dile: PathLike){
        readFileSync(Dile).toString().split("\n").map((v,i)=>{
            let line = v;
          
            let stuff = line.split(/[\s\r]+/).filter(Boolean)
            if(stuff[0]==""){

            }else{
                this.file = {}
                console.log(stuff)
                switch (stuff[0]) {
                    case "src":
                    
                            if(this.file["keys"]){
                                
                            }else{
                                this.file["keys"] = [];
                            }
                            this.file[stuff[1]] = [];
                            this.file[stuff[1]] = [];
                            let args: string[] = [];
                            let commentFlag=false;
                            
                            stuff.forEach((eq:string)=>{
                                if(stuff[0] == eq){
                                    
                                }else if(stuff[1] == eq){
                                    
                                }else if(eq == ""){
                                    
                                }else if(eq=="#"||eq[0] == "#"){
                                    if(!commentFlag){
                                        commentFlag = true;
                                    }else{
                                        
                                    }
                                }else{
                                    if(!commentFlag){
                                    args.push(eq);
                                    
                                    }else{
    
                                    }
                                }
                            })      
    
                            args.map((v,g)=>{
    
                                    if(this.file["keys"][i]){
                                        this.file["keys"][i]["components"].push(v);
                                    }else{
                                        let d = {
                                            name: stuff[1],
                                            destro: [v],
                                            components: [],
                                            cfg: {},
                                        }
                                        this.file["keys"][i]=d;
                                    }
                            });
                            //let DJD = readFileSync(Dile).toString().split("\n")[i+1].split("\r")[0].split(" "); // Get the line and split all unnessasary tags.
                            
                            //if(DJD[0] == "cfg" && DJD[1] == "{"){
                              //  let tillEndCase = i;
                               
                            //}
                     
                        break;
                    case "#":
                       
                    break
    
                    default:
                        
                    break;
                }
            }
            
        });
        
    }
}