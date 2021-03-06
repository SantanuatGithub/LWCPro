import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';

export default class CreateUIRecord extends LightningElement {

    fieldValue;
    firstName;
    lastName; 
    email;
    contactId;

    handleChange(event){
        this.fieldValue = event.target.value;        
        if(event.target.label === "First Name" && this.fieldValue !=='' && this.fieldValue !== undefined)
            this.firstName = this.fieldValue;
        else if(event.target.label === "Last Name" && this.fieldValue !=='' && this.fieldValue !== undefined)
            this.lastName = this.fieldValue;
        else if(event.target.label === "Email" && this.fieldValue !=='' && this.fieldValue !== undefined)
            this.email = this.fieldValue;        
    }

    createContact(){

        const FIELDS = {};
        FIELDS[CONTACT_FIRST_NAME.fieldApiName] = this.firstName;
        FIELDS[CONTACT_LAST_NAME.fieldApiName] = this.lastName;
        FIELDS[CONTACT_EMAIL.fieldApiName] = this.email;

        
        const contactRecord  = {apiName:CONTACT_OBJECT.objectApiName, fields: FIELDS};
        
        createRecord(contactRecord)
            .then(contact => {
                this.contactId = contact.id;                
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact created. Contact Id: '+this.contactId,
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,//error.body.output.fieldErrors,
                        variant: 'error',
                    }),
                );
            });
    }
}