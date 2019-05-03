import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Contact_LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';

export default class CreateLREFRecord extends LightningElement {

     fields = [Contact_LAST_NAME_FIELD];

    handleSuccess(event){
        const contactId = event.detail.id;
        if(this.recordId !== null){
            this.dispatchEvent(new ShowToastEvent({
                    title: "SUCCESS! ",
                    message: "Recod "+ contactId +" has been saved.",
                    variant: "success",
                }),
             );
               
        }
    }



}