import { LightningElement, track } from 'lwc';
import getImperativeContactList from '@salesforce/apex/LWC_ContactController.getImperativeContactList';

export default class ShowContactsIM extends LightningElement {
    @track contacts;
    @track error;

    connectedCallback(){ //you can build a method for a button
        getImperativeContactList()
        .then(result => {
            this.contacts = result;
            this.error = undefined;
        }).catch(error=>{
            this.error = error;
            this.contacts = undefined;
            
        })
    }
}