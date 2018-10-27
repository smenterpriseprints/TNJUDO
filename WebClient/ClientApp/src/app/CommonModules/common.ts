import { Injectable } from '@angular/core';

@Injectable()
export class BrowserToaster {
    NotifyDomToasterMessage(message, className) {
        let toastr = window["toastr"];
        alert(className +":" +message);

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "positionClass": "toast-top-right",//'toast-bottom-right',//"toast-top-full-width",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "50000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        toastr.clear();
        switch (className.toLowerCase()) {
            case "info": {
                toastr.info(message);
                break;
            }
            case "warning": {

                toastr.warning(message);
                break;
            }
            case "success": {
                toastr.success(message)
                break;
            }
            case "error": {
                toastr.error(message)
                break;
            }
        }

    }

}