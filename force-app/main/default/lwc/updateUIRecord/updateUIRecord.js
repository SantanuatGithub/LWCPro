import { LightningElement } from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import USER_COMPANY_NAME from '@salesforce/schema/User.CompanyName';
import USER_DEPARTMENT from '@salesforce/schema/User.Department';
import USER_ID from '@salesforce/schema/User.Id';
import CURRENTUSERID from '@salesforce/user/Id';

export default class UpdateUIRecord extends LightningElement {

    companyName;
    department;

    handleChange(event){
        this.fieldValue = event.target.value;        
        if(event.target.label === "Company Name" && this.fieldValue !=='' && this.fieldValue !== undefined)
            this.companyName = this.fieldValue;
        else if(event.target.label === "Department" && this.fieldValue !=='' && this.fieldValue !== undefined)
            this.department = this.fieldValue;              
    }

    updateUser(){

        const fields = {};
        fields[USER_ID.fieldApiName] = CURRENTUSERID;
        fields[USER_COMPANY_NAME.fieldApiName] = this.companyName;
        fields[USER_DEPARTMENT.fieldApiName] = this.department;

        const userRecordInput = { fields };

        updateRecord(userRecordInput)
            .then(()=> {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'User: '+CURRENTUSERID +' has been updated.',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error updating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });

    }
}