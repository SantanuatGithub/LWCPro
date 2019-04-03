import { LightningElement, wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
import getStaticContact from '@salesforce/apex/LWC_ContactController.getStaticContact';

import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import CONTACT_PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ShowStaticContact extends LightningElement {

    @wire(getStaticContact) contactObj;

    get name(){
        return this.contactObj.data
            ? getSObjectValue(this.contactObj.data, CONTACT_NAME_FIELD)
            : '';
    }

    get phone(){
        return this.contactObj.data
            ? getSObjectValue(this.contactObj.data, CONTACT_PHONE_FIELD)
            : '';
    }

    get email(){ 
        return this.contactObj.data
            ? getSObjectValue(this.contactObj.data, CONTACT_EMAIL_FIELD)
            : '';
    }
}