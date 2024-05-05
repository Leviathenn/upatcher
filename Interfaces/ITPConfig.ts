/**
 * @author Leviathenn
 */

import type { ITDevice } from "./ITDevice";

export interface ITPConfig{
    tool: string,  
    path: string,
    callback: Function,
    selected: string;
}