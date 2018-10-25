import { Injectable} from '@angular/core';

@Injectable()
export class BrowserToaster {

    NotifyDomToasterMessage(message,type)
    {
        alert(type +":" +message);
    }

}