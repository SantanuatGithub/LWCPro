import { LightningElement,track } from 'lwc';

export default class TakeUserInput extends LightningElement {

    firstName;
    lastName;
    @track name;

    takeInputs(){
        this.firstName = this.template.querySelector("[data-field='FirstName']").value;
        this.lastName = this.template.querySelector("[data-field='LastName']").value;

        this.name = this.firstName + " " + this.lastName;
    }

}