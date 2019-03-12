import { LightningElement, track, wire } from 'lwc';
import searchContactList from '@salesforce/apex/LWC_ContactController.searchContactList';

const DELAY = 300;

export default class ShowContactsWMFP extends LightningElement {
    @track searchKey = '';
    
    @wire(searchContactList, {accountName:'$searchKey'}) contacts;

    searchContact(event){
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        //this.searchKey = searchKey;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }


}