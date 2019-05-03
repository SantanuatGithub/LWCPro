import { LightningElement, track } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
import getImperativeStaticContact from '@salesforce/apex/LWC_ContactController.getImperativeStaticContact';

import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import CONTACT_PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ShowImperativeApexStaticContact extends LightningElement {

    @track contactObj;
    @track error;

    connectedCallback(){
        getImperativeStaticContact()
        .then(result => {
            this.contactObj = result;
            this.error = undefined;
        }).catch(error=>{
            this.error = error;
            this.contactObj = undefined;
            
        })
    }
    

    get name(){
        return this.contactObj
            ? getSObjectValue(this.contactObj, CONTACT_NAME_FIELD)
            : '';
    }

    get phone(){
        return this.contactObj
            ? getSObjectValue(this.contactObj, CONTACT_PHONE_FIELD)
            : '';
    }

    get email(){
        return this.contactObj
            ? getSObjectValue(this.contactObj, CONTACT_EMAIL_FIELD)
            : '';
    }
}