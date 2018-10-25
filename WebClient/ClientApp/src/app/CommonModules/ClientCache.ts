
export class SMECache
{

   static SetCache(key:string,value:any):boolean
    {
        localStorage.setItem(key,value);
        return true;
    }

    
    static GetCache(key:string):any
    {
        return localStorage.getItem(key);
    }

}