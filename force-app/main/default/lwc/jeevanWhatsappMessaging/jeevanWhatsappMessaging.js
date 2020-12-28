import { LightningElement, track} from 'lwc';
import getTwhatsAppMessages from '@salesforce/apex/JeevanWhatsappController.getTwhatsAppMessages';
import sendMsg from '@salesforce/apex/JeevanWhatsappController.sendMsg';

export default class JeevanWhatsappMessaging extends LightningElement {
    @track messages = [];

    // init handler
    connectedCallback() {
        window.addEventListener("notification", this.handleNotification.bind(this));
        this.loadMessages();
    }

    handleSend() {
        const inpt = this.template.querySelector('lightning-input'); 
        const msg = inpt.value;
        
        sendMsg({msg: msg})
            .then(() => {
                inpt.value = '';
                this.loadMessages();
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleNotification() {
        this.loadMessages();
    }

    loadMessages() {
        getTwhatsAppMessages()
            .then(result => {
                this.messages = result;
            })
            .catch(error => {
                console.error(error);
            });
    }
}