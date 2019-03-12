import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/LWC_ContactController.getContactList';

export default class ShowContactsWMF extends LightningElement {

    @track contacts;
    @track error;

    @wire(getContactList)
        wiredContacts({data, error}){
            if(data){
                this.contacts = data;
                this.error = undefined;
            }
            else if (error) {
                this.error = error;
                this.contacts = undefined;
            }
        }
}