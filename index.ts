import { setTimeout } from "node:timers/promises"
import { Axios } from "axios";
import { Spinner } from "@topcli/spinner";
import crypto from "node:crypto"
import { temp } from "./tools/temp.ts";
import { time, timeEnd } from "node:console"

let APP_VERSION = "0.1.0"

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
    LICENSE IS MIT BY USING YOU ACCEPT TO THESE TERMS. ENJOY!
    

`)
//await setTimeout(1000);

//const lSpinner = new Spinner().start("Retriving Sources ");

let tempd = new temp();

//let src: source = new source("sources.list");
//src.get();

timeEnd();