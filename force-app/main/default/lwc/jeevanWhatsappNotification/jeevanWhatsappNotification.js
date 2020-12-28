import { LightningElement } from 'lwc';
import { subscribe, onError} from 'lightning/empApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class JeevanWhatsappNotification extends LightningElement {
    channelName = '/event/WhatsApp_Message__e';

    // auto subscribe
    connectedCallback() {
        const self = this;
        // Callback invoked whenever a new event message is received
        const messageCallback = function(response) {
            self.showNotification(response.data.payload.Body__c);
            const evt = new Event("notification", {
                "bubbles": true,
                "cancelable": false,
                composed: true
            });
            self.dispatchEvent(evt);
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback);
    }

    showNotification(message) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'New WhatsApp message',
            message: message,
            variant: 'success'
        }));
        
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError(error => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }
}