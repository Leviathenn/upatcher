import { setTimeout } from "node:timers/promises"
import axios, { Axios } from "axios";
import { Spinner } from "@topcli/spinner";
import crypto from "node:crypto"
import { temp } from "./tools/temp.ts";
import { time, timeEnd } from "node:console"
import { writeFileSync } from "node:fs";
import type { ISource } from "./Interfaces/ISource.ts";
import type { ITSource } from "./Interfaces/ITSource.ts";
import { ToolSources } from "./parser/sources.ts";
import type { ISF } from "./Interfaces/ISF.ts";

let APP_VERSION = "0.1.0"
let APP_RAW = "https://raw.githubusercontent.com/Leviathenn/upatcher/main"
time();

var getHash = ( content: string ) => {				
    var hash = crypto.createHash('md5');
    //passing the data to be hashed
    let data = hash.update(content, 'utf-8');
    //Creating the hash in the required format
    let gen_hash= data.digest('hex');
    return gen_hash;
}




console.log("\r\n  _    _ _____      _       _               \r\n | |  | |  __ \\    | |     | |              \r\n | |  | | |__) |_ _| |_ ___| |__   ___ _ __ \r\n | |  | |  ___\/ _` | __\/ __| \'_ \\ \/ _ \\ \'__|\r\n | |__| | |  | (_| | || (__| | | |  __\/ |   \r\n  \\____\/|_|   \\__,_|\\__\\___|_| |_|\\___|_|   \r\n                                            \r                                            \r")
console.log(`
    RUNNING VERSION: "${APP_VERSION}"
    MADE BY LEVIATHENN OR LVITHAN ON TWITCH
    BUILT AND COMPILED WITH DENO
    SOURCES FILE HOSTED ON GITHUB FOR CUSTOM SOURCES SEE GUIDE.
    WRITIN IN TYPESCRIPT
    
    PATCHES ARE NOT VERIFED BEFORE UPLOAD. THIS MEANS YOU MIGHT INSTALL A PATCH WITH MALWARE.
    TO BE SURE ITS NOT, TRY AND GO FOR PATCHES THAT SAY VERIFIED. OTHERWISE YOU'RE AT RISK!
    
    LICENSE IS MIT BY USING YOU ACCEPT TO THESE TERMS. ENJOY! 
`)
let tempd = new temp();
await setTimeout(1000);

const lSpinner = new Spinner().start("Retriving Sources.. "); 


axios.get(`${APP_RAW}/sources.json`).then((res)=>{
    let sourcesFile: ISF = res.data; 
    lSpinner.succeed("Retrived Sources.");
;
    let Sources: ISource[] = sourcesFile["Sources"];
    let ToolSource: ITSource[] = sourcesFile["ToolSources"]; 
    //console.log(ToolSource)
    let tsc = new ToolSources(ToolSource);
    tsc.get({tool: "devtunnel",selected:"windows",path:"./devtunnel.exe",callback:(c: boolean)=>{
        console.log(c);
    }})


timeEnd();
}).catch((err)=>{
    lSpinner.failed("Could not Retrive sources. Check the \"error.log\" file for more info.");
    writeFileSync("error.log",err.toString());
})
